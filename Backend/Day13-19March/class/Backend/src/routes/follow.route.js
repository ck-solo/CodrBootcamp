import { Router } from "express";

const followRouter = Router()

followRouter.get("/followers/:userId",(req,res)=>{
    res.json({message:"Get Followers"})
})

followRouter.get("/following/userId",(req,res)=>{
    res.json({message:"Get Following"})
})

followRouter.post("/",(req,res)=>{
    res.json({message:"Follow user"})
})

followRouter.put("/:id",(req,res)=>{
    res.json()
})