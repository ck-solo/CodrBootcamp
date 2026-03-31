import express from "express"
import authRouter from "./routes/user.route.js"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import cors from "cors"
import postRouter from "./routes/post.route.js"
const app = express() 
app.use(express.json())
app.use(cookieParser())
app.use(morgan("dev"))
app.use(cors({
    origin:"http://localhost:5173",
    methods:["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

app.use("/api/auth", authRouter)
app.use("/api/post", postRouter)

export default app