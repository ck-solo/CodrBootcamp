import express from "express"
import { getdata, registertask } from "../controllers/auth.controller.js"


const authRouter = express.Router()

authRouter.post("/registertask",registertask)
authRouter.get("/getdata",getdata)

export default authRouter