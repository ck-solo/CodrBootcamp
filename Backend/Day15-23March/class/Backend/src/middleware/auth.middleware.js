import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config/config.js";


export async function authMiddleware(req,res,next){
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message:"Unauthorized",
            success:false
        })
    }

    try{

        const decoded = jwt.verify(token, JWT_SECRET) 
        req.user = decoded
        
        return next()

    }catch(error){
        return res.status(400).json({
            message:"Invalid token",
            success:false

        })
    }



}