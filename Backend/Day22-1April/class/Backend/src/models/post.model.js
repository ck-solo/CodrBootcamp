import mongoose, { mongo } from "mongoose";

const postSchema = new mongoose.Schema({
    caption:{
        type:String,
        required:true,
        maxlength: 1200
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true   
    },
    media:[{
        url:{
            type:String
        },
        media_type:{
            type:String,
            enum:["image","video"]
        }
    }]

})

const postModel = mongoose.model("userPost",postSchema)

export default postModel