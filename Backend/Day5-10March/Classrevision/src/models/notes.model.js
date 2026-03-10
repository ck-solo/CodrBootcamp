import mongoose from "mongoose";

const noteSchema = new mongoose.Schema({
    task:String ,
    description:String,
})

const notemodel = mongoose.model("notes",noteSchema)

export default notemodel