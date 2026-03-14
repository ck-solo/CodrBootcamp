import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    title:String,
    artist:String,
    url:String,
    postUrl:String,
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
})

const songModel = mongoose.model("songs",songSchema)

export default songModel