import mongoose from "mongoose"

const postScehma = new mongoose.Schema({
    caption:{
        type:String,
        required:true,
        maxlength:1200
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"reviseUser",
        required:true
    },
    media:{
        url:{
            type:String
        },
        media_type:{
            type:String,
            enum:["image", "video"]
        }
    }
})

const postModel = mongoose.model("revisepost",postScehma)

export default postModel