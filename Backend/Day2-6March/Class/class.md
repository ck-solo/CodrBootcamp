when using the import then we have to wrote type:"module" in the package.json belo the main 


morgan = middleware hai jo detail data hai konsa method call hua hai uska status or current time


notes = [note1,note2,note3]

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

delete = /notes/:params


********************************
mongodb
database

cluster 


database
