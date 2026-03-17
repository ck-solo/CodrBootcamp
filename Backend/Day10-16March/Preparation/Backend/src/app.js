import express from "express"
import morgan from "morgan"
import authRouter from "./routes/authRoute.js"
import songRouter from "./routes/songRoute.js"
import cors from "cors"
const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

app.use('/api/auth',authRouter)
app.use('/api/song',songRouter)


export default app