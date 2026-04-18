import { Router } from "express";
import { getme, login, register } from "../controller/auth.controller.js";

const authRouter = Router()
authRouter.post("/register",register)
authRouter.post("/login",login)
authRouter.post("/getme",getme)

export default authRouter