import { Router } from "express";
import { getme, login, register } from "../controller/auth.controller";

const authRouter = Router()

authRouter.use("/register",register)
authRouter.use("/login",login)
authRouter.use("/getme",getme)

export default  authRouter