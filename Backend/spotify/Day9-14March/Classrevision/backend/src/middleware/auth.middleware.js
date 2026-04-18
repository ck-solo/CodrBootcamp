import { config } from "../config/config.js"
import jwt from "jsonwebtoken"

export async function checkArtist(req,res,next){
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message:"Unatuhorized",
            success:false,
        })
    }
    const decoded = jwt.verify(token,config.JWT_TOKEN)
    if(decoded.userType !== "artist"){
        return res.status(403).json({
            message:"tum artist nhi ho",
            success:false,
        })
    }
    
    req.user = decoded

    next()
}