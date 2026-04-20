import { Router } from "express";
import multer from "multer";
import { authUser } from "../middleware/auth.middleware.js";
import { createStory, getStories } from "../controller/story.controller.js";

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 15 * 1024 * 1024, // 15MB
    },
});

const storyRouter = Router();

storyRouter.post("/", authUser, upload.single("media"), createStory);
storyRouter.get("/", authUser, getStories);

export default storyRouter;
