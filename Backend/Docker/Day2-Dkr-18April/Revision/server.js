import express from "express";
import mongoose from "mongoose";

const app = express(); 
const port = 3000
mongoose.connect('mongodb://localhost:27017/mydatabase',{})


const EntrySchema = new mongoose.Schema({
  text:String,
  data:{type:Date, Default:Date.now}
})

const Entry  = mongoose.model("Entry", EntrySchema)

app.get("/", async (req, res) => {
 try {
  const entry = new Entry({text: "This is an entry"})
  await entry.save() 
  res.send("Entry Added 🚀");
 } catch (error) {
  res.status(500).send("Error Occured")
 }
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
