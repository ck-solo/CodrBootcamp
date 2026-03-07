 import mongoose from "mongoose"
import app from "./src/app.js"
  
async function connectToDB(){
   await mongoose.connect("mongodb+srv://server:LB3eILdo2MDmgvac@cluster0.wbtkagw.mongodb.net/day-3")
   console.log("connected to db")
}

connectToDB()

 app.listen(3000,()=>{
    console.log("server is running..")
 })