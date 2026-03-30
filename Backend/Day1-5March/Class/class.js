const express = require("express")

const app = express()

const notes = []
app.use(express.json())



app.post("/notes", (req,res)=>{
    
    notes.push(req.body)

    req.status(201).json({
        message:"Notes created successfully"
    })
    
})

 

app.listen(3000,()=>{
    console.log("This server is running")
})