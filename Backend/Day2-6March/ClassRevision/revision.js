import express from "express"
import morgan from "morgan"

const app = express()


app.use(express.json())
app.use(morgan("dev"))

const list = []

app.post("/class",(req,res)=>{
    list.push(req.body)
    console.log(list)
    res.status(201).json({
        message:"post is created"
    })
    
})

app.get("/class",(req,res)=>{
    res.status(201).json({
        message:"post created successfully",
        list
    })
})


app.delete("/class/:index",(req,res)=>{
    const index = req.params.index
    console.log(index)
    delete list [ index ]
    res.status(201).json({message:"post deleted successfully"})

})

app.patch("/class/:index",(req,res)=>{
    const index = req.params.index
    const { role } = req.body
    list[ index ].role = role
    res.status(201).json({message:"post is updated"})
})


app.listen(3000,()=>{
    console.log("Server is running....")
})