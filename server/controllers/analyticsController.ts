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

export const getAnalyticsRevenueByCategory = async (req: Request, res: Response) => {

    try {
        const result = await pool.query(`
            SELECT
                cat.id,
                cat.name,
                SUM((oi.unit_price)*(oi.quantity)) AS revenue_by_category
            FROM categories cat
            JOIN products pro ON pro.category_id = cat.id
            JOIN order_items oi ON oi.product_id = pro.id
            JOIN orders ON oi.order_id = orders.id
            WHERE orders.status != 'Cancelled'
            GROUP BY cat.id, cat.name
            ORDER BY SUM((oi.unit_price)*(oi.quantity)) DESC
            LIMIT 4;
        `)
        console.log(result)
        res.status(200).json(result.rows)

    } catch (error) {

        console.log(error)

        res.status(500).json({
            message: "Failed to fetch analytics revenue by category, aov",
        })
    }
}



export const getAnalyticsTopMarketsRevenue = async (req: Request, res: Response) => {

    try {
        const result = await pool.query(`
            SELECT
                cus.country AS country_name,
                -- SUM(orders.total_amount) AS country_revenue,
                -- SUM(SUM(orders.total_amount)) OVER() AS total_revenue,
                ROUND(
                    SUM(orders.total_amount)* 100.0 /
                    SUM(SUM(orders.total_amount)) OVER()
                    ) AS revenue_percentage 
            FROM customers cus
            JOIN orders ON orders.customer_id = cus.id
            WHERE status != 'Cancelled'
            GROUP BY cus.country
            ORDER BY ROUND(
                        SUM(orders.total_amount)* 100 /
                        SUM(SUM(orders.total_amount)) OVER()
                        ) DESC,
                        SUM(orders.total_amount) DESC
            LIMIT 5;
        `)
        console.log(result)
        res.status(200).json(result.rows)

    } catch (error) {

        console.log(error)

        res.status(500).json({
            message: "Failed to fetch analytics top markets, aov",
        })
    }
}