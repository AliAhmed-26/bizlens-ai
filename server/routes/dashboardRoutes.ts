import express from "express"
import { getChartRevenue, getDashboardStats, getRecentOrders, getSalesByCategory, getTopProducts } from "../controllers/dashboardController.js"

const router = express.Router()

router.get("/stats", getDashboardStats)
router.get("/chart_revenue", getChartRevenue)
router.get("/sales_by_category", getSalesByCategory)
router.get("/top_products", getTopProducts)
router.get("/recent_orders", getRecentOrders)

export default router