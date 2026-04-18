import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
   artist:String,
   title:String,
   url:String,
   postUrl:String,
   user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users"
   }

})

const songModel = mongoose.model("songs",songSchema)

export default songModel