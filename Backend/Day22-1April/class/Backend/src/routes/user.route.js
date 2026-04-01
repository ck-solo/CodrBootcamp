import { Router } from "express";
import { getMe, login, register } from "../controller/user.controller";

const userRouter = Router()

userRouter.post("/register",register)
userRouter.post("/login",login)
userRouter.get("/getme",getMe)

export default userRouter