import multer from "multer"
import path from "path"
import crypto from "crypto"
import fs from "fs"

const uploadDirectory = path.join(process.cwd(), "uploads")

if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory, { recursive: true })
}

const storage = multer.diskStorage({
    destination:(req, file, callback)=> {
        callback(null, uploadDirectory)
    },
    filename:(req, file, callback)=> {
        const uniqueName = `${crypto.randomUUID()}${path.extname(file.originalname).toLowerCase()}`
        callback(null, uniqueName)
    },
})

const fileFilter: multer.Options["fileFilter"] = (req, file, callback) => {
    const allowedExtensions = [".csv", ".xls", ".xlsx"]
    const extension = path.extname(file.originalname).toLowerCase()
    if (allowedExtensions.includes(extension)) {
        callback(null, true)
    }
    else {
        callback(new Error("Only CSV and Excel files are allowed."))
    }
}

const upload = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 10 * 1024 * 1024
    }
})

export default upload