import express from "express";
import morgan from "morgan"

const app = express();

app.use(express.json());
app.use(morgan("dev"))

const notes = [];
app.post("/notes", (req, res) => {
  notes.push(req.body);
  console.log(notes)
  res.status(201).json({
    message: "Notes created successfully",
  });
});


app.get("/notes",(req,res)=>{
    res.status(200).json({
        message:"Notes fetched successfully",
        notes
    })

})

app.delete("/notes/:index",(req,res)=>{
    const index = req.params.index
    console.log(index)
    delete notes [ index ]
    res.status(200).json({
        message:"notes deleted successfully"
    })
})


app.patch("/notes/:index",(req,res)=>{
    const index = req.params.index;
    const { role } = req.body

    notes[ index ].role = role
    
    res.status(200).json({
        message:"This is patch "
    })
})

app.listen(3000, () => {
  console.log("Server is running.....");
});
