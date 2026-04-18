import { Router } from "express";
import { updateSong } from "../controller/song.controller.js";
import multer from "multer";
import { checkuser } from "../middleware/auth.middleware.js";

const update = multer({
  storage: multer.memoryStorage(),
});

const songRouter = Router();

songRouter.post("/", checkuser ,update.single("song"), updateSong);

export default songRouter;
