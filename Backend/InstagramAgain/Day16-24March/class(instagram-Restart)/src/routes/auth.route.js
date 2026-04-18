import { Router } from "express"
import { loginValidation, registerValidation } from "../validator/auth.validation"
import { getMe, login, register } from "../controller/auth.controller.js"
import { authUser } from "../middleware/auth.middleware.js"

const authRouter = Router()

authRouter.post("/register",registerValidation, register)
authRouter.post("/login", loginValidation, login)
authRouter.get("/me",authUser, getMe)

export default authRouter