import userModel from "../models/auth.models.js"
import jwt from "jsonwebtoken"
import {config} from "../config/config.js"

export async function register(req, res){
    const { email , password } = req.body

   const user = await userModel.create({
        email,
        password
    })

    const token = jwt.sign({
        id:user._id,
        email:user.email
    },config.JWT_TOKEN,{
        expiresIn:"1h"
    })
    
    res.cookie("token",token)

    res.status(201).json({
        message:"User registered successfully",
        user
    })
    
}