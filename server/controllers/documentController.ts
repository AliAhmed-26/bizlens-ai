import { Response, Request } from "express";
import pool from "../config/db.js";
import path from "path";
import fs from "fs"

export const getDocumentUpload = async (req: Request, res: Response) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                message: "No file uploaded"
            })
        }

        const fileType = path.extname(req.file.originalname).slice(1).toLowerCase();

        try {

            const result = await pool.query(`
                INSERT INTO uploaded_files (business_id, file_name, stored_name, file_path, file_type,file_size, row_count)
                VALUES ($1, $2, $3,$4,$5,$6,$7)
                RETURNING file_id, processing_status
                `, [1, req.file.originalname, req.file.filename, req.file.path, fileType, req.file.size, 1])

            const row = result.rows[0]
            return res.status(200).json({
                message: "File uploaded successfully",
                file: {
                    id: row.file_id,
                    originalName: req.file.originalname,
                    size: req.file.size,
                    storedName: req.file.filename,
                    mimeType: req.file.mimetype,
                }
            })
        } catch (dbError) {
            fs.unlink(req.file.path, (err) => {
                if (err) console.error("Cleanup failed:", err)
            })
            throw dbError
        }
    } catch (error) {
        console.error("Upload error:", error)
        return res.status(500).json({
            message: "File upload failed"
        })
    }
}