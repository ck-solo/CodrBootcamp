 import mongoose from "mongoose"

 const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true,
    trimL:true
  },
  email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
    lowercase:true
  },
  password:{
    type:String,
    select:false,
  },
  fullName:{
    type:String,
    required:true,
    trim:true 
  },
  bio:{
    type:String,
    default:'',
    maxlength:150,
  },
  profileImage:{
    type:String,
    default:"https://ik.imagekit.io/hnoglyswo0/avatar-photo-default-user-icon-600nw-2558759027.webp"
  },
  private:{
    type:Boolean,
    default:true,
  },
 },{
  timestamps:true
 })


 const userModel = mongoose.model("user", userSchema)

 export default userModel