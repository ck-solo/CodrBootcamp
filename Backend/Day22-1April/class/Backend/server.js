import app from "./src/app.js"
import { connectDb } from "./src/config/data.js"


connectDb()
app.listen(3000,()=>{
    console.log("server is running on port 3000.")
})