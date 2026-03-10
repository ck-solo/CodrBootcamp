import express from "express"
import morgan from "morgan"
import authRouter from "./routes/auth.routes.js"
import { getme } from "./controllers/auth.controller.js"

const app = express()

app.use(express.json())
app.use(morgan("dev"))

app.use("/api/auth", authRouter)
app.use("/api/auth/getme", getme)



export default app