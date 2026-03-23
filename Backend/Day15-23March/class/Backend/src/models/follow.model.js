import mongoose from "mongoose";

const followSchema = new mongoose.Schema({
    follower:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    following:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    status:{
        type:String,
        enum:["pending","accept","reject"],
        default:'pending'

    }
},{
    timestamps:true
})

const followModel = mongoose.model("followersData", followSchema)

export default followModel