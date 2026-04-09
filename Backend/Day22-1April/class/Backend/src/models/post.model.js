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
    }],
    likes:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }],
    comments:[{
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        text:{
            type:String,
            required:true
        },
        createdAt:{
            type:Date,
            default:Date.now
        }
    }]
}, { timestamps: true })

const postModel = mongoose.model("userPost",postSchema)

export default postModel