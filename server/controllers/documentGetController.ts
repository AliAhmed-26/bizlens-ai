import { Response, Request } from "express";
import pool from "../config/db.js";

export const getDocumentMetaData = async (req: Request, res: Response) => {
    try {
        const metaData = await pool.query(`
            SELECT 
                file_id,
                file_name,
                file_type,
                file_size,
                processing_status,
                uploaded_at
            FROM uploaded_files
            ORDER BY uploaded_at DESC
            `)
        return res.status(200).json({
            metaData: metaData.rows,
            message: "Meta Data recieved"
        })
    } catch (error) {
        console.log("Get meta data error: ", error)
        return res.status(500).json({
            message: "File meta data failed:"
        })
    }
}

export const getDocumentActualData = async (req: Request, res: Response) => {
    try {
        const actualData = await pool.query(`
            SELECT 
                file_id,
                row_number,
                row_data
            FROM uploaded_file_rows
            WHERE file_id = $1
            ORDER BY row_number ASC
            `,[req.params.fileID])
        return res.status(200).json({
            actualData: actualData.rows,
            message: "Actual Data recieved"
        })
    } catch (error) {
        console.log("Get actual data error: ", error)
        return res.status(500).json({
            message: "File actual data failed:"
        })
    }
}