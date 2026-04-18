import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    fullname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:function(){
            return !this.googleId;
        }
    },
    googleId:{
        type:String,
    }

})

userSchema.index({googleId: 1}, {sparse:true, unique:true})


const userModel = mongoose.model("reviseUser", userSchema)

export default userModel