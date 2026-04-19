import { Router } from "express";
import multer from "multer";
import { authUser } from "../middleware/auth.middleware.js";
import { createPost, getPosts, likePost, addComment, deleteComment } from "../controller/post.controller.js";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 15 * 1024 * 1024,
  },
});

const postRouter = Router();
postRouter.post("/",authUser, upload.array("media",7),createPost)
postRouter.get('/get',authUser,getPosts) 
postRouter.post("/likes/:postId", authUser, likePost)
postRouter.post("/comments/:postId", authUser, addComment)
postRouter.delete("/comments/:postId/:commentId", authUser, deleteComment)
export default postRouter;
