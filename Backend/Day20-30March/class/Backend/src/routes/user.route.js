import { Router } from "express";
import { getMe, handleRegister, loginRegister } from "../controller/auth.controller.js";

const authRouter = Router()


authRouter.post("/register", handleRegister)
authRouter.post("/login",loginRegister)
authRouter.get("/getme",getMe)

export default authRouter