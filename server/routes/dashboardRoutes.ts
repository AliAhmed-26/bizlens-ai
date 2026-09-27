import express from "express"
import { getChartRevenue, getDashboardStats, getSalesByCategory } from "../controllers/dashboardController.js"

const router = express.Router()

router.get("/stats", getDashboardStats)
router.get("/chart_revenue", getChartRevenue)
router.get("/sales_by_category", getSalesByCategory)

export default router