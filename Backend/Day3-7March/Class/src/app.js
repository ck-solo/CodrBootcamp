import express from "express"
import morgan from "morgan"
import noteModel from "./models/note.model.js"

const app = express()

app.use(express.json())
app.use(morgan("dev"))


app.post("/notes", async (req,res)=>{
   const { name , role } = req.body

  await noteModel.create({
    name: name,
    role: role
   })

   res.status(201).json({message:"post created"})
 

})


app.get("/notes", async(req,res)=>{
     const notes = await noteModel.find({
        role:"gamer"
     })
     console.log(notes)


     res.status(200).json({
        message:"Notes fetched succesffully",
        notes
     })
})


app.delete("/notes/:id", async (req, res)=>{
    await noteModel.findByIdAndDelete(req.params.id)

    res.status(200).json({message:"Notes deleted Successfully"})
})

app.patch("/notes/:id", async (req, res)=>{
    const id = req.params.id
    const { role } = req.body

    await noteModel.findByIdAndUpdate(id, { role })

    res.status(200).json({message:"Note updated successfully"})
})


export default app