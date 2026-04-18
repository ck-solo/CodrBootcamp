import express from "express"
import morgan from "morgan"
import authRouter from "./routes/auth.route.js"
import { getmovie } from "./controller/auth.controller.js"

const app = express()
app.use(express.json())
app.use(morgan("dev"))


app.use("/api/auth/", authRouter)
app.use("/api/auth/getmovie",getmovie)

export default app