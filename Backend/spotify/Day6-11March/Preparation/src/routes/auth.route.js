import express from "express"
import { getmovie, register } from "../controller/auth.controller.js"

const authRouter = express.Router()

authRouter.post("/register", register)
authRouter.get("/getmovie",getmovie)

export default authRouter