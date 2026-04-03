import express from "express";
import morgan from "morgan"; 
import cookieParser from "cookie-parser";
import postRouter from "./routes/post.route.js";
import cors from "cors"
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.routes.js";
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
   methods: ["GET", "POST", "PUT", "DELETE"],
   credentials: true
}))

app.use("/api/auth", authRouter)
app.use("/api/posts", postRouter) 
app.use("/api/users",userRouter)

export default app;
