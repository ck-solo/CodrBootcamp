import { Router } from "express";
import { getMe, login, register } from "../controller/auth.controller.js";

const authRouter  = Router()

authRouter.post("/register",register)
authRouter.post("/login",login)
authRouter.post("/getme",getMe)

export default authRouter
