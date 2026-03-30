import express from "express"
import authRouter from "./routes/user.route.js"
import cookieParser from "cookie-parser"
import morgan from "morgan"
const app = express() 
app.use(express.json())
app.use(cookieParser())
app.use(morgan("dev"))


app.use("/auth/api", authRouter)

export default app