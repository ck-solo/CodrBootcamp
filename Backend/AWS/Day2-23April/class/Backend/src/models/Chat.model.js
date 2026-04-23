import mongoose, { mongo } from "mongoose"
const chatSchema = new mongoose.Schema({
    message:{
        type:String,
    },
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    receiver:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
}, {
    timeStamps:true,
})

const chatMessageModel = mongoose.model("chatMessage",chatSchema)

export default chatMessageModel