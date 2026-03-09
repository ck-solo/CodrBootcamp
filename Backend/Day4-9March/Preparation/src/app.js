import express from "express" 
import listModel from "./models/list.models.js"
import morgan from "morgan"

const app = express()

app.use(express.json())
app.use(morgan("dev"))

app.post("/list", async (req,res)=>{
     const { name , role } = req.body;
     await listModel.create({
        name:name,
        role:role
     })

    res.status(201).json({message:"Post is created"})
})

app.get("/list", async (req,res)=>{
    const list = await listModel.find({})
    res.status(201).json({message:"Post fetch successfully", list})
})


app.delete("/list/:id",async (req,res)=>{
    await listModel.findByIdAndDelete(req.params.id);

    res.status(200).json({message:"post deleted successfully."})
})

app.patch("/list/:id", async(req,res)=>{
    const id = req.params.id;
    const { role } = req.body;

    await listModel.findByIdAndUpdate(id,{role});

    res.status(200).json({message:"post updated successfully."})
})

export default app