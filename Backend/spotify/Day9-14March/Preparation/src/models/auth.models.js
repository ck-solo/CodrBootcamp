import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:String,
    password:String,
    userType:{
        type:String ,
        emum:["user","artist"],
        
    }
})

const userModel = mongoose.model("album",userSchema)

export default userModel