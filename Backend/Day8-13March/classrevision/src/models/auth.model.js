import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
    },
    password:String,
    userType:{
        type:String,
        enum:["user","artist"],
       
    }
})

const authModel = mongoose.model("userdata",authSchema)

export default authModel