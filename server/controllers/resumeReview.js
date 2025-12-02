import OpenAI from "openai";
import sql from "../configs/db.js";
import extractPdfText from "../utility/pdf.js";

const AI = new OpenAI({
    apiKey: process.env.GEMINI_API_KEY,
    baseURL: "https://generativelanguage.googleapis.com/v1beta/openai/",
});

export const resumeReview = async (req, res) => {
    try {
        const { userId } = req.auth();
        const resume = req.file;
        const plan = req.plan;

        if (plan !== "premium") {
            return res.json({
                success: false,
                message: "This feature is only available for premium subsciptions",
            });
        }

        if (resume.size > 5 * 1024 * 1024) {
            return res.json({
                success: false,
                message: "Resume size should not exceed 5MB.",
            });
        }

        // const dataBuffer = fs.readFileSync(resume.path);
        const pdfData = await extractPdfText(resume.path);

        console.log("PDFdata is ", pdfData);


        const prompt = ` Review the following resume and provide detailed feedback:
                            • Strengths
                            • Weaknesses
                            • Missing sections
                            • Suggestions for formatting and clarity
                            Resume Content:${pdfData.text}`;

        const response = await AI.chat.completions.create({
            model: "gemini-2.0-flash",
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
            temperature: 0.7,
            max_tokens: 1000,
        });

        const content = response.choices[0].message.content;

        await sql`INSERT INTO creations (user_id, prompt, content, type)
        VALUES (${userId},${"Review the uploaded resume"},${content},'resume-review');`;

        res.json({ success: true, content });
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};
