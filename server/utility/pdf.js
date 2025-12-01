// const extractPdfText = async (buffer) => {
//     const pkg = await import("pdf-parse");
//     const pdf = pkg.default;

//     const data = await pdf(buffer);
//     return { text: data.text };
// };

// export default extractPdfText;


import fs from "fs";
import pdf from "pdf-extraction";

const extractPdfText = async (filePath) => {
    const buffer = fs.readFileSync(filePath);
    const data = await pdf(buffer);

    return { text: data.text };
};

export default extractPdfText;