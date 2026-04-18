import app from "./src/app.js"
import { connectToDb } from "./src/config/data.js"



connectToDb()
app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000.")
})