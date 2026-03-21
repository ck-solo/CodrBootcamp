import {Router} from 'express';
const likeRouter = Router()

likeRouter.post("/",(req, res)=>{
    res.json({message:"Like post"})
})

likeRouter.delete("/:postId",(req , res)=>{
    res.json({message:"Unlike post"})
})

likeRouter.get("/:postId",(req, res)=>{
    res.json({message:"Get all like for a post"})
})

export default likeRouter