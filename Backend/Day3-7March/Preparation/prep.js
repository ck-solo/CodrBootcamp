import express from "express"
import morgan from "morgan"

const app = express()

app.use(express.json())
app.use(morgan("dev"))

const pack =[]
app.post("/work",(req,res)=>{
    pack.push(req.body)
    res.status(201).json({message:"Post is created"})
})

app.get("/work",(req,res)=>{
    res.status(201).json({message:"getting post",pack})
})

app.delete("/work/:index",(req,res)=>{
    const index = req.params.index
    console.log(index)
     delete pack[index] 
    res.status(201).json({message:"post is deleted"})
})



app.patch("/work/:index",(req,res)=>{
    const index = req.params.index
    const {role} = req.body
    pack[index].role =  role
    
    res.status(201).json({message:"post is updated"})
})


app.listen(3000,()=>{
    console.log("Server is running...")
})