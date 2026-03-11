import jwt from "jsonwebtoken"
import userModel from "../models/auth.model.js"
import { config } from "../config/config.js";

export async function register(req,res) {

  const {email, password, userType} = req.body;
  
  const user = await userModel.create({
    email,
    password,
    userType
  })
 
  const token = jwt.sign({
    id:user._id,
    email:user.email,
    userType:user.userType
  }, config.JWT_SECRET,{
    expiresIn: "1h"
  })

  res.cookie("data",token)

  res.status(201).json({
    message:"user registered successfully",
    user
  })

}

export async function getme(req,res){
  const token = req.cookies.data

  const decoded = jwt.verify(token, config.JWT_SECRET)

  res.status(201).json({
    message:"user fetched successfully",
    decoded
  })
}