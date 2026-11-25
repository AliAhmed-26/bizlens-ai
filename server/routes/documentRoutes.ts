import express from "express"
import { getDocumentUpload } from "../controllers/documentController.js"
import upload from "../config/multer.js"


const router = express.Router()

router.post("/upload", upload.single("file"), getDocumentUpload)

export default router