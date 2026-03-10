import mongoose from "mongoose";
import { config } from "./config.js";

export default async function connectToDb(){
    await mongoose.connect(config.MONGO_URI)

    console.log("connected to db")
}
 


