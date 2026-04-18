import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,  
        unique:true ,
        sparsh:true
    

    },
    fullname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:function(){
            return !this.googleId
        },
    },
    googleId:{
        type:String,
        default : ""
    }
})

const userModel = mongoose.model("InstaUser", userSchema)


export default userModel