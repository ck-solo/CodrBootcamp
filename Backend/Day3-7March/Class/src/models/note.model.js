import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    name : String,
    role : String,
    
})

const noteModel = mongoose.model("notes", noteSchema)

export default noteModel