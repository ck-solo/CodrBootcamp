import mongoose from "mongoose";
import { MONGO_URI } from "./config.js";

export async function connectToDb(){
    await mongoose.connect(MONGO_URI)
    console.log("Connect to Db")
}