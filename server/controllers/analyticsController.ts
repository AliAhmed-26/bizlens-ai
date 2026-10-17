import pool from "../config/db.js";
import { Response, Request } from "express";

export const getAnalyticsOrdersGraph = async (req: Request, res: Response) => {

    const range = req.query.range
    const allowedRanges: Record<string, number> = {
        "7 Days": 7,
        "30 Days": 30,
        "3 Months": 90,
        "1 Year": 365,
    };

    if (typeof range !== "string" || !(range in allowedRanges)) {
        return res.status(400).json({
            message: "Invalid date range"
        })
    }

    const days: number = allowedRanges[range]


    try {
        const result = await pool.query(`
            SELECT
                DATE(order_date) AS date,
                SUM(total_amount) AS revenue_per_day,
                COUNT(*)::integer AS order_per_day,
                AVG(total_amount) AS aov
            FROM orders
            WHERE order_date >= CURRENT_DATE - ($1 * INTERVAL '1 day')
            GROUP BY DATE(order_date)
            ORDER BY DATE(order_date) ASC
        `, [days])
        console.log(result)
        res.status(200).json(result.rows)

    } catch (error) {

        console.log(error)

        res.status(500).json({
            message: "Failed to fetch analytics orders, aov",
        })
    }
}