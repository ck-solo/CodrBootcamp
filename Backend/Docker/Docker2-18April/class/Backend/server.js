import app from "./src/app.js"
import { connectDb } from "./src/config/data.js"
import { createServer } from "http"
import socketHandler from "./src/sockets/app.socket.js"

const httpServer = createServer(app)

socketHandler(httpServer)

connectDb()

 httpServer.listen(3000,()=>{
    console.log("server is running on port 3000.")
})