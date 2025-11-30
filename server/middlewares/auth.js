import { clerkClient } from "@clerk/express";

export const auth = async (req, res, next) => {
    try {
        const { userId } = req.auth();

        if (!userId) {
            return res.json({ success: false, message: "Unauthorized" });
        }
        const user = await clerkClient.users.getUser(userId);
        // console.log("DEBUG PRIVATE METADATA:", user.privateMetadata);


        // Read plan from Clerk metadata
        const plan = user.privateMetadata?.plan?.toLowerCase() || "free";
        const isPremium = plan === "premium";

        req.plan = isPremium ? "premium" : "free";

        if (!isPremium) {
            req.free_usage = user.privateMetadata?.free_usage || 0;
        } else {
            await clerkClient.users.updateUserMetadata(userId, {
                privateMetadata: { free_usage: 0 }
            });
            req.free_usage = 0;
        }

        next();
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};