import { Router } from "express";
import { getMe, login, register } from "../controller/user.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { registerValidation,loginValidation } from "../validation/user.validate.js";

const userRouter = Router()

userRouter.post("/register",validate(registerValidation),register)
userRouter.post("/login",validate(loginValidation),login)
userRouter.get("/getme",getMe)

export default userRouter