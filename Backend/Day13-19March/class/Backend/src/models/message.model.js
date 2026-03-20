import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    receiverID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    content:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        trim:true
    },
    media:[
        {
            url:{
                type:String,
            },
            mediaType:{
                type:String,
                enum:["image","video"]
            },
        },
    ],

},{
    timestamps:true
})

const messageModel = mongoose.model("messageData",messageSchema)

export default messageModel