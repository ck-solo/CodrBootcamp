import mongoose  from "mongoose";

const listSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true,
        min:8
    },
    
    role:String,
    
})

const listModel =  mongoose.model("list", listSchema)

export default listModel