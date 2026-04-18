import { Router } from "express"
import multer from "multer"
import { uploadSong } from "../controller/song.controller.js"

const storage = multer.memoryStorage()
const upload = multer({storage : storage})

const songRouter = Router()

songRouter.post("/",upload.single('song'),uploadSong)

export default songRouter