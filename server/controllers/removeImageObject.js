import cloudinary from "cloudinary";
import sql from "../configs/db.js";

const Cloudinary = cloudinary.v2;

export const removeImageObject = async (req, res) => {
    try {
        const { userId } = req.auth();
        const { object } = req.body;
        const image = req.file;
        const plan = req.plan;

        // console.log("Your request is here");
        if (plan !== "premium") {
            return res.json({
                success: false,
                message: "This feature is only available for premium subsciptions",
            });
        }

        const { public_id } = await Cloudinary.uploader.upload(image.path);

        const imageUrl = cloudinary.url(public_id, {
            transformation: [{ effect: `gen_remove:${object}` }],
            resource_type: "image",
        });

        await sql`INSERT INTO creations (user_id, prompt, content, type)
        VALUES (${userId},${`Removed ${object} from image`},${imageUrl},'image')`;

        res.json({ success: true, content: imageUrl });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};
