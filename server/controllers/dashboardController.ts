import pool from "../config/db.js";
import { Response, Request } from "express";

export const getDashboardStats = async (req: Request, res: Response) => {
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


export const getChartRevenue = async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`
            SELECT 
                DATE(order_date) AS date,
                SUM(total_amount) AS revenue_per_day
            FROM orders
            GROUP BY (order_date)
            ORDER BY DATE(order_date)
        `)
        // console.log(result)
        res.status(200).json(result.rows)

    } catch (error) {

        console.log(error)

        res.status(500).json({
            message: "Failed to fetch revenue chart data",
        })
    }
}

export const getSalesByCategory = async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`
            SELECT
                categories.name AS category_name,
                SUM(order_items.unit_price * order_items.quantity) AS total_sales,
                ROUND
                (
                    (
                        (
                            SUM(order_items.unit_price * order_items.quantity)
                            /
                            SUM(
                                SUM(order_items.unit_price * order_items.quantity)
                            )OVER()
                        ) 
                    * 100 
                    )::numeric , 0
                ) AS sales_percentage
            FROM order_items
            JOIN products
                ON order_items.product_id = products.id
            JOIN categories 
                ON categories.id = products.category_id
            GROUP BY categories.name
            ORDER BY total_sales DESC

        `)
        // console.log(result.rows)
        res.status(200).json(result.rows)

    } catch (error) {

        console.log(error)

        res.status(500).json({
            message: "Failed to fetch sales by category ",
        })
    }
}

export const getTopProducts = async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`
            SELECT 	
                name AS product_name,
                SUM(order_items.quantity) AS total_quantity,
                SUM(order_items.unit_price * order_items.quantity) AS total_revenue
            FROM order_items
            JOIN products
            ON order_items.product_id = products.id
            GROUP BY products.id
            ORDER BY total_quantity DESC, total_revenue DESC;

        `)
        console.log(result.rows)
        res.status(200).json(result.rows)

    } catch (error) {

        console.log(error)

        res.status(500).json({
            message: "Failed to fetch top products ",
        })
    }
}


export const getRecentOrders = async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`
            SELECT 
                orders.id,
                customers.name,
                orders.total_amount,
                orders.status,
                orders.order_date
            FROM orders
            JOIN customers
            ON customers.id = orders.customer_id
        `)
        console.log(result.rows)
        res.status(200).json(result.rows)

    } catch (error) {

        console.log(error)

        res.status(500).json({
            message: "Failed to recent orders ",
        })
    }
}

