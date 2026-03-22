import mongoose from "mongoose" 
import { MONGO_URI } from "./config.js"

export async function ConnectDB(){
    await mongoose.connect(MONGO_URI)
    console.log("database is connect")
    
}