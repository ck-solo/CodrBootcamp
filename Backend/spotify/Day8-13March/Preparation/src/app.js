import express from "express"
import morgan from "morgan"
import songRoute from "./routes/song.routes.js"

const app = express()
app.use(express.json())
app.use(morgan("dev"))

app.use("/api/song",songRoute)


export default app