import pool from "../config/db.js";
import { Response, Request } from "express";

export const getBusinesses = async (req: Request, res: Response) => {
    try {
        const result = await pool.query("SELECT * FROM businesses")
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)

        res.status(500).json({
            message: "Failed to fetch businesses",
        })
    }
} 
