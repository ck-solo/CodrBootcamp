import express from "express";
import http from "http";
import { Server } from "socket.io";
 

const app = express();
 

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello world" });
});

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("a user is connected");

  socket.on("disconnect", () => {
    console.log("a user is disconnected");
  });
    
 
  socket.on("hero", msg => {
    socket.broadcast.emit("message", msg)
  })
});

httpServer.listen(3000, () => {
  console.log("server is running on port 3000");
});
