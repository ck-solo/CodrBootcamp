import userModel from "../models/user.model.js"
import jwt from "jsonwebtoken"

export async function register(req,res){
    const {email , password} = req.body
    const user = await userModel.create({
        email,password
    })
const token = jwt.sign({
    email:user.email,
    id:user._id
},"72735f73695d8aff48ba2bf0aa7d22b7"
)
res.status(201).json({
    message:"user created successfully",
    token:token
})
}

export async function getme(req,res){
    const { token } = req.body
    const decoded = jwt.verify(token,"72735f73695d8aff48ba2bf0aa7d22b7")
    res.status(200).json({
        message:"user data read successfuly",
        user:decoded
    })
}