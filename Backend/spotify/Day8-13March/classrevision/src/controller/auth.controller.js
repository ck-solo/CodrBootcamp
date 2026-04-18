import authModel from "../models/auth.model.js"
import jwt from "jsonwebtoken"
import { config } from "../config/config.js"
export async function register(req,res){
    const { email , password, userType = "user"} = req.body

    const user = await authModel.create({
        email,
        password,
        userType
    })

    const token = jwt.sign({
        id:user._id,
        email:user.email,
    }, config.JWT_SECRET,{
        expiresIn:"1h"
    })

    res.cookie("token",token)

    res.status(201).json({
        message:"post register successfully",
        user
    })

}
  

export async function login(req,res){
    const {email , password} = req.body
    
    const user = await authModel.findOne({
        email,
    })

    if(!user){
        return res.status(404).json({
            message:"User not found",
        success:false
        })
    }

    const isPasswordValid = user.password === password;

    if(!isPasswordValid){
        return res.status(401).json({
            message:"Invalid Password",
            success:false
        })
    }   

    const token = jwt.sign({
        id:user._id,
        email:user.email,
        userType:user.userType
    },config.JWT_SECRET,{
        expiresIn:"1h"
    })

    res.cookie("token",token)

    res.status(200).json({
        message:"User logged in successfully",
        user
    })
}



