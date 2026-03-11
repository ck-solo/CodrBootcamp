import app from "./src/app.js"
import connectDB from "./src/config/database.js"
import dns from "dns";

// dns.setServers(["8.8.8.8", "8.8.4.4"]);

connectDB()

app.listen(3000,()=>{
    console.log("Server is running....")
})