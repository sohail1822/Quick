import PDFParser from "pdf2json";

const extractPdfText = (buffer) => {
    return new Promise((resolve, reject) => {
        const pdfParser = new PDFParser();

        pdfParser.on("pdfParser_dataError", (err) => reject(err.parserError));
        pdfParser.on("pdfParser_dataReady", (data) => {
            const text = pdfParser.getRawTextContent();
            resolve(text);
        });

        pdfParser.parseBuffer(buffer);
    });
};


export default extractPdfText;