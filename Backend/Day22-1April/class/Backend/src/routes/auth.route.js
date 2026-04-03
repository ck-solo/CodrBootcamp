import { Router } from "express";
import { getMe, login, register } from "../controller/auth.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { registerValidation,loginValidation } from "../validation/user.validate.js";

const authRouter = Router()

authRouter.post("/register",validate(registerValidation),register)
authRouter.post("/login",validate(loginValidation),login)
authRouter.get("/getme",getMe)

export default authRouter