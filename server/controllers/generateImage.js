import FormData from "form-data";
import axios from "axios";
import cloudinary from "cloudinary";
import sql from "../configs/db.js";

const Cloudinary = cloudinary.v2;

export const generateImage = async (req, res) => {
    try {
        const { userId } = req.auth();
        const { prompt, publish } = req.body;
        const plan = req.plan;
        console.log("User plan is ", plan);

        if (plan !== "premium") {
            return res.json({
                success: false,
                message: "This feature is only available for premium subsciptions",
            });
        }

        const formData = new FormData();
        formData.append("prompt", prompt);

        const { data } = await axios.post(
            "https://clipdrop-api.co/text-to-image/v1",
            formData,
            {
                headers: {
                    ...formData.getHeaders(),
                    "x-api-key": process.env.CLIPDROP_API_KEY,
                },
                responseType: "arraybuffer",
            }
        );

        const base64image = `data:image/png;base64,${Buffer.from(
            data,
            "binary"
        ).toString("base64")}`;
        const { secure_url } = await Cloudinary.uploader.upload(base64image);

        await sql`INSERT INTO creations (user_id, prompt, content, type, publish)
        VALUES (${userId},${prompt},${secure_url},'image', ${publish ?? false
            })`;

        res.json({ success: true, content: secure_url });
    } catch (error) {
        console.log(error.message);

        if (error.response?.status === 402) {
            return res.json({
                success: false,
                message: "ClipDrop credits exhausted. Please recharge or upgrade.",
            });
        }
        res.json({ success: false, message: error.message });
    }
};
