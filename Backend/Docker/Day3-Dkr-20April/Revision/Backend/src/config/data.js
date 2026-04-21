import mongoose from "mongoose"
import { MONGO_URL } from "./config.js"

export async function connectDb(){
    await mongoose.connect(MONGO_URL)
    console.log("connect to db")
}