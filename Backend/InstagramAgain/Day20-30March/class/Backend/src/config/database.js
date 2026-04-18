import mongoose from "mongoose";
import { MONGO_URL } from "./config.js"

export async function ConnectDb(){
    await mongoose.connect(MONGO_URL)
    console.log("Connect DB")
}