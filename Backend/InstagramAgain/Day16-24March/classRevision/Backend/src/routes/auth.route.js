import { Router } from "express";
import { getMe, login, register } from "../controller/auth.controller.js";
import { authuser } from "../middleware/auth.middleware.js";

const authRouter = Router()

authRouter.post("/register", register)
authRouter.post("/login", login)
authRouter.get("/getme", authuser,getMe)


export default authRouter