import app from "./src/app.js"
import { connectDb } from "./src/config/data.js"
import { Server } from "socket.io"
import { createServer } from "http"

const httpServer = createServer(app)
const io = new Server(httpServer,{
    cors: {
        origin: "http://localhost:5173",
        methods: [ "GET", "POST", "PUT", "DELETE", "PATCH" ],
        credentials: true,
    }
})


io.on("connection",(socket)=>{
    console.log("A user connected", socket.id)

    socket.on('send message', (data)=>{
        console.log(data)
    })

    socket.on('disconnect',()=>{
        console.log("A user disconnected", socket.id)
    })
})

connectDb()

 httpServer.listen(3000,()=>{
    console.log("server is running on port 3000.")
})