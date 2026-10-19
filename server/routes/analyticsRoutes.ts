import express from "express"
import { getAnalyticsOrdersGraph, getAnalyticsRevenueByCategory, getAnalyticsTopMarketsRevenue } from "../controllers/analyticsController.js"

const router = express.Router()

router.get("/orders_aov", getAnalyticsOrdersGraph)
router.get("/analytics_revenue_category", getAnalyticsRevenueByCategory)
router.get("/analytics_top_markets_revenue", getAnalyticsTopMarketsRevenue)

export default router