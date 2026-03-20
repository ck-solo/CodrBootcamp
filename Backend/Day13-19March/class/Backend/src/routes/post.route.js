import { Router } from "express";
import multer from "multer"

const storage = multer.memoryStorage()
const update = multer({storage})


const postRouter = Router()

postRouter.post("/song",update.single("song"),)

export default postRouter
