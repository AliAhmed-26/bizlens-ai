import express from "express"
import { getAnalyticsOrdersGraph } from "../controllers/analyticsController.js"

const router = express.Router()

router.get("/orders_aov", getAnalyticsOrdersGraph)

export default router