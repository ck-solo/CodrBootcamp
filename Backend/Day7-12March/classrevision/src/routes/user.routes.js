import { Router } from "express";
import multer from "multer"
import { uploadSong } from "../controller/music.controller.js";

const userRouter = Router()
 
const storage = multer.memoryStorage()
const update = multer({storage})

userRouter.post("/",update.single("song"),uploadSong)

export default userRouter

