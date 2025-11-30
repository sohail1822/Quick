import { clerkClient } from "@clerk/express";

// Middleware to check UserID and plan
export const auth = async (req, res, next) => {
    try {
        const { userId } = req.auth;

        if (!userId) {
            return res.json({ success: false, message: "Unauthorized" });
        }

        const user = await clerkClient.users.getUser(userId);
        const hasPremiumPlan = user.privateMetadata?.plan === "premium";

        if (!hasPremiumPlan) {
            req.free_usage = user.privateMetadata?.free_usage || 0;
        } else {
            await clerkClient.users.updateUserMetadata(userId, {
                privateMetadata: { free_usage: 0 },
            });
            req.free_usage = 0;
        }
        req.plan = hasPremiumPlan ? "premium" : "free";
        next();

    } catch (error) {
        res.json({ success: false, message: error.message });
    }
};