import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    name:String,
    role:String
})


const postModel = mongoose.model("posts", postSchema)

export default postModel