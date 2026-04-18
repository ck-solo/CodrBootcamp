import { config } from "../config/config.js"
import musicModel from "../models/list.model.js"
import jwt from "jsonwebtoken"

export async function register(req,res){
    const { email , password , userType} = req.body

    const user = await musicModel.create({
        email,
        password ,
        userType
    })

    const token = jwt.sign({
        id:user._id,
        email:user.email,
        userType:user.userType
    }, config.JWT_SECRET,{
        expiresIn:"1h"
    })

    res.cookie("token",token)

    res.status(201).json({
        message:"music registerd successfully",
        user
    })
    
}

export async function getme(req,res) {
    const token = req.cookies.musicModel

    const decoded = jwt.verify(token, config.JWT_SECRET)

    res.status(200).json({
        message:"User fetch successfully",
        user:decoded
    })
    
}