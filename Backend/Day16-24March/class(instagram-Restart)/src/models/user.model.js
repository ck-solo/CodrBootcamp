import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
         type:String,
        required:true,
        unique:true
    },
    fullname:{ type:String,
        required:true,
        

    },
    password:{
         type:String,
        required:function(){
          return !this.googleId
        },
         
    },
    googleId:{
         type:String,
        unique:true
    }
})

const userModel = mongoose.model("Userdata", userSchema)
export default userModel