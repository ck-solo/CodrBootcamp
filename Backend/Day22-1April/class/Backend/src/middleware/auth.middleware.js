import jwt from "jsonwebtoken"
import { JWT_SECRET } from "../config/config.js"


export function authUser(req,res,next){
    const token = req.cookies.lund
    console.log(token)
    if(!token){
        return res.status(401).json({message:"Unauthorized", success:false})
    }

    
    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        

        console.log(decoded)
        
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({message:"Invalid token", success:false})
        
    }
}
