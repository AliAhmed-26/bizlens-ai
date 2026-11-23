import { Response, Request } from "express";

export const getDocumentUpload = async (req: Request, res: Response) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                message: "No file uploaded"
            })
        }
        return res.status(200).json({
            message: "File uploaded successfully",
            file: {
                originalName: req.file.originalname,
                size: req.file.size,
                storedName: req.file.filename,
                mimeType: req.file.mimetype
            }
        })
    } catch (error) {
        console.error("Upload error:", error)
        return res.status(500).json({
            message: "File upload failed"
        })
    }
}