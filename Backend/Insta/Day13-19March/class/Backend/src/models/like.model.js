import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post",
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    }
},
{
    timestamps:true
})

const likeModel = mongoose.model("likeData",likeSchema)

export default likeModel