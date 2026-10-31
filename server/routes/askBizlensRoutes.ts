import express from "express"
import { getChatWithAi } from "../controllers/askBizlensController.js"


const router = express.Router()

router.post("/chat", getChatWithAi)

export default router