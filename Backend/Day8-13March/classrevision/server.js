import app from "./src/app.js"
import {ConnectDB} from "./src/config/database.js"


ConnectDB()
app.listen(3000,()=>{
    console.log("server is running on Port 3000 ... ")
})