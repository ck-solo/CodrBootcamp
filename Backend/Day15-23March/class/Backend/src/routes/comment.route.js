import { Router } from 'express'

const commentRouter = Router()


commentRouter.get("/:postId",(req,res)=>{
    res.json({message:"Get all comments for a post"})
})

commentRouter.post("/",(req,res)=>{
    res.json({message:"Create comment"})
})

commentRouter.delete("/:id",(req,res)=>{
    res.json({message:"Delete comment"})
})

export default commentRouter