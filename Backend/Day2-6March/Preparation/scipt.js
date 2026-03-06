const express = require("express")

const app = express()

app.use(express.json())

app.post("/class",(req,res)=>{
    const student = []
    student.push(req.body)
    res.status(201).json({message:"Student Created Successfully"})
    console.log(student)
})
 

app.listen(3000,()=>{
    console.log("The Server is running......")
})