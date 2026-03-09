import express from "express"
import morgan from "morgan"
import taskModel from "./models/task.models.js"
import cors from "cors"

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))


app.post("/task", async (req,res)=>{
    const { title , description} = req.body
    await taskModel.create({
        title:title,
        description:description,
    })
    
    res.status(201).json({message:"task added successfully"})
})

app.get("/task", async (req,res)=>{
   const task =  await taskModel.find({})
   res.status(201).json({message:"task fetched successfully", task})
})

app.delete("/task/:id", async(req,res)=>{
    await taskModel.findByIdAndDelete(req.params.id);
    res.status(200).json({message:"post is deleted succesfully."})
})

app.patch("/task/:id", async(req,res)=>{
    const id = req.params.id;
    const { title , description } = req.body;

    await taskModel.findByIdAndUpdate(id,{title, description})

    res.status(200).json({message:"post updated successfully"})
})




export default app