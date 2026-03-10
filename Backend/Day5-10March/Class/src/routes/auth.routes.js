import express from "express"
import { register } from "../controllers/auth.controller.js"
import { getme } from "../controllers/auth.controller.js"

const authRouter = express.Router()

authRouter.post("/register", register)

authRouter.get("/getme", getme)


export default authRouter