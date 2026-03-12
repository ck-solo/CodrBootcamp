import mongoose from "mongoose";

const musicSchema = new mongoose.Schema({
    email:String,
    password:String,
    userType:{
        type:String,
        enum:["user","artist"],
        default:"user"
    }

})

const musicModel = mongoose.model("music",musicSchema)

export default musicModel;