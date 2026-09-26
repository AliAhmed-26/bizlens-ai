import pool from "../config/db.js";
import { Response, Request } from "express";

const getDashboardStats = async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`
            SELECT 
                COUNT(*) AS total_orders,
                SUM(total_amount) AS total_revenue,
                AVG(total_amount) AS average_order_value
            FROM orders
        `)
        res.status(200).json(result.rows[0])

    } catch (error) {

        console.log(error)

        res.status(500).json({
            message: "Failed to fetch dashboard data",
        })
    }
}

export default getDashboardStats