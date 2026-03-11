import mongoose from "mongoose";
import { config } from "./config.js";

export async function connectData(){
    await mongoose.connect(config.MON_URI)
    console.log("Connect to db")
}