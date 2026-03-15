import moongose from "mongoose"

const authSchema = new moongose.Schema({
    email:{
        type:String,
        unique:true

    },
    password:String,
    userType:{
        type:String,
        emum:["user","artist"]
    }
})

const authModel = moongose.model("userdata",authSchema)

export default authModel