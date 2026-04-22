import { getMe, login, register, logout } from "../controller/auth.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { Router } from "express";
import {
  registerValidation, 
  loginValidation,
} from "../validation/user.validate.js";
import { authUser } from "../middleware/auth.middleware.js";

const authRouter = Router();

authRouter.post("/register", validate(registerValidation), register);
authRouter.post("/login", validate(loginValidation), login);
authRouter.get("/getme", authUser, getMe);
authRouter.post("/logout", authUser, logout);

export default authRouter;
