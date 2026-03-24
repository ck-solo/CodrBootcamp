import app from "./src/app.js"
import { ConnectMONGO } from "./src/config/db.js"


ConnectMONGO()
app.listen(3000,()=>{
    console.log("Server is running on Port 3000...")
})