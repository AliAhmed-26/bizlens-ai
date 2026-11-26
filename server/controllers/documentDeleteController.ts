import { Response, Request } from "express";
import pool from "../config/db.js";
import fs from "fs"
export const getDocumentDelete = async (req: Request, res: Response) => {
    try {
        const file_path_obj = await pool.query(`
        SELECT file_path
        FROM uploaded_files
        WHERE file_id = ($1)
        `, [req.params.fileID])

        if (file_path_obj.rows.length > 0)
            fs.unlink(file_path_obj.rows[0].file_path, (error) => {
                if (error) console.log("delete error", error);
            });

        try {
            await pool.query(`
            DELETE 
            FROM uploaded_files
            WHERE file_id = ($1)
            `, [req.params.fileID])

            return res.status(200).json({
                message: "Deleted successflly",
                isDeleted: true
            })
        } catch (error) {
            
            throw error
        }
    } catch (error) {
        return res.status(400).json({
            message: "Delete failed"
        })
    }
}