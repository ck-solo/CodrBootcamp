import { Router } from "express";

 const postRouter = Router()

postRouter.get("/:id",(req,res)=>{
    res.json({message:"Get single post"})
})

postRouter.post("/",(req,res)=>{
    res.json({message:"create post"})
})

postRouter.put("/:id",(req,res)=>{
    res.json({message:"Update post"})
})

postRouter.delete("/:id",(req,res)=>{
    res.json({message:"Delete post"})
})

 export default postRouter