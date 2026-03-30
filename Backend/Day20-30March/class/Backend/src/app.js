import express from "express"
import authRouter from "./routes/user.route.js"
import cookieParser from "cookie-parser"
import morgan from "morgan"
import cors from "cors"
const app = express() 
app.use(express.json())
app.use(cookieParser())
app.use(morgan("dev"))
app.cors({
    origin:"http://localhost:5173",
    methods:["GET", "POST", "PUT", "DELETE"],
    credentials: true,
})

app.use("/auth/api", authRouter)

export default app