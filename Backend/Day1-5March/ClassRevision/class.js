const express = require("express")

const app = express()

app.use(express.json())
app.post("/classnotes",(req,res)=>{
    const notes = []

    notes.push(req.body)
     
    console.log(notes)
    res.status(201).json({message:"this is message output"})



})

app.listen(3000,()=>{
    console.log("Server is running")
})