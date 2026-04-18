import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true,
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post",
        required:true
    },
    content:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        trim:true
    },
},
{
    timestamps:true
})

const commentModel = mongoose.Model("commetData",commentSchema)

export default commentModel 