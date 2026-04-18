import { Router } from "express";
import { songUpload } from "../controller/song.controller.js";
import multer from "multer";
import checkArtist from "../middleware/auth.middleware.js";

const songRouter = Router();
const storage = multer.memoryStorage();
const update = multer({ storage });

songRouter.post("/", checkArtist, update.single("reel"), songUpload);

export default songRouter;
