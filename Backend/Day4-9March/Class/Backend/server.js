import app from "./src/app.js";
import mongoose from "mongoose";

async function connectedDB(){
    await mongoose.connect("mongodb+srv://server:LB3eILdo2MDmgvac@cluster0.wbtkagw.mongodb.net/day-3")
    console.log("connect to db")
}

connectedDB()

app.listen(3000,()=>{
    console.log("server is running...")
})

