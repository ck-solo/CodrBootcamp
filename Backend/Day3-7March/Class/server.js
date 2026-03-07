import app from "./src/app.js";
import mongoose from "mongoose";

async function connectToDB() {
  await  mongoose.connect("mongodb+srv://server:LB3eILdo2MDmgvac@cluster0.wbtkagw.mongodb.net/day-3")
    console.log("server is connected to DB")
     
}

  
connectToDB() 

app.listen(3000,()=>{
    console.log("server is running....")
})