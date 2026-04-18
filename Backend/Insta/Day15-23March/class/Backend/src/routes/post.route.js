import { Router } from "express";
import multer from "multer"
import { authMiddleware } from "../middleware/auth.middleware.js";
import { createPost, getPosts, getPostById } from "../controller/post.controller.js";


const upload = multer({storage : multer.memoryStorage(),
    limits: {
        fileSize: 10* 1024 * 1024,
    }
})


 const postRouter = Router()

 postRouter.get("/", authMiddleware, getPosts)
postRouter.get("/:id",authMiddleware, getPostById)

postRouter.post("/", authMiddleware, upload.array("media", 10), createPost)

postRouter.put("/:id",(req,res)=>{
    res.json({message:"Update post"})
})

postRouter.delete("/:id",(req,res)=>{
    res.json({message:"Delete post"})
})

 export default postRouter