import { Router } from "express";
import { songUpload } from "../controller/song.controller.js";
import multer from "multer";

const songRoute = Router()
const storage = multer.memoryStorage()
const update = multer({storage})
 

songRoute.post("/", update.single("song"), songUpload)

export default songRoute

