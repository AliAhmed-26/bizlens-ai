import express from "express"
import { getDocumentUpload } from "../controllers/documentUploadController.js"
import upload from "../config/multer.js"
import { getDocumentActualData, getDocumentMetaData } from "../controllers/documentGetController.js"
import { getDocumentDelete } from "../controllers/documentDeleteController.js"


const router = express.Router()

router.post("/upload", upload.single("file"), getDocumentUpload)
router.get("/get_metadata", getDocumentMetaData)
router.get("/:fileID/data", getDocumentActualData)
router.delete("/delete/:fileID", getDocumentDelete)

export default router