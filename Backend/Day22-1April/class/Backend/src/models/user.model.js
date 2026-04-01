import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
         
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    fullname:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:function(){
            return !this.googleId
        }
    },
    googleId:{
        type:String
    }
})

const userModel = mongoose.model("user",userSchema)
export default userModel