import { Router } from "express";
import { updateSong } from "../controller/song.controller.js";
import multer from "multer";
// import {checkArtist} from "../middleware/auth.middleware.js"


const update = multer(multer.memoryStorage());

const songRouter = Router();
songRouter.post("/", update.single("song"), updateSong);

export default songRouter;
