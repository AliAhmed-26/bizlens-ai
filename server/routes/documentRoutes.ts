import express from "express"
import { getDocumentUpload } from "../controllers/documentUploadController.js"
import upload from "../config/multer.js"
import { getDocumentActualData, getDocumentMetaData } from "../controllers/documentGetController.js"


const router = express.Router()

router.post("/upload", upload.single("file"), getDocumentUpload)
router.get("/get_metadata", getDocumentMetaData)
router.post("/:fileID/data", getDocumentActualData)

export default router