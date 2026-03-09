import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:String,
    description:String
})

const taskModel = mongoose.model("task",taskSchema)

export default taskModel 