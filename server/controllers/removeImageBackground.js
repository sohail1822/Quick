import cloudinary from "cloudinary";
import sql from "../configs/db.js";

const Cloudinary = cloudinary.v2;

export const removeImageBackground = async (req, res) => {
    try {
        const { userId } = req.auth();
        const image = req.file;
        const plan = req.plan;
        console.log("User plan", plan);

        if (plan !== "premium") {
            return res.json({
                success: false,
                message: "This feature is only available for premium subsciptions",
            });
        }

        const { secure_url } = await Cloudinary.uploader.upload(image.path, {
            transformation: [
                {
                    effect: "background_removal",
                    background_removal: "remove_the_background",
                },
            ],
        });

        await sql`INSERT INTO creations (user_id, prompt, content, type)
        VALUES (${userId},'Remove Background from image',${secure_url},'image')`;

        res.json({ success: true, content: secure_url });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};
