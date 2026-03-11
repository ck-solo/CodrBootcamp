import app from "./src/app.js"
import { connectData } from "./src/config/database.js"

connectData()

app.listen(3000,()=>{
    console.log("Server is running...")
})