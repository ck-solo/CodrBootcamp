import { Router } from "express";
import { getMe, googleAuthCallback, login, register } from "../controller/auth.controller.js";
import passport from "passport";
import { authUser } from "../middleware/auth.middleware.js";
import { loginValidationRules, registerValidationRules } from "../validators/auth.validator.js";

const authRouter = Router();

authRouter.post("/register",registerValidationRules, register)
authRouter.post("/login", loginValidationRules,login)
authRouter.get("/getMe", authUser,getMe)


authRouter.get("/google",passport.authenticate("google",{
    scope: ["profile","email"]
}))

authRouter.get("/google/callback",
    passport.authenticate("google",{session:false}),
    googleAuthCallback
)

export default authRouter