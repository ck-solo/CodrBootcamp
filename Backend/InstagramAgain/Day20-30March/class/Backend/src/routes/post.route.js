import Router from "express"
import { authUser } from "../middleware/auth.middleware.js"
import multer from "multer"
import { createPost, getPosts } from "../controller/post.controller.js"

const upload = multer({
    storage: multer.memoryStorage(),
        limits:{
            fileSize: 15 *1024 * 1024
        }
})
const postRouter = Router()
postRouter.post("/",authUser, upload.array("media",7),createPost)

postRouter.get('/get',authUser,getPosts) 

export default postRouter