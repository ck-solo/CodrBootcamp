import {Router} from "express"
import { songUpdate } from "../controller/song.controller.js"
import multer from "multer"
import {checkArtist} from "../middleware/auth.middleware.js"

const storage = multer.memoryStorage()
const update = multer({storage})
const songRouter = Router()

songRouter.post("/",checkArtist,update.single("song") ,songUpdate)

export default songRouter