import { Router } from "express";

const messageRouter = Router()

messageRouter.post("/",(req,res)=>{
    res.json({message:"Send message"})
})

messageRouter.get("/:userId",(req,res)=>{
    res.json({message:"Get message with user"})
})

messageRouter.delete("/:id",(req,res)=>{
    res.json({message:"Delete message"})
})
export default messageRouter