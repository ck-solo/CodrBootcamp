import mongoose from "mongoose";
import { MONGO_URI } from "./config.js";

export async function ConnectMONGO(){
    await mongoose.connect(MONGO_URI)
    console.log("Connect To MONGODB")
}