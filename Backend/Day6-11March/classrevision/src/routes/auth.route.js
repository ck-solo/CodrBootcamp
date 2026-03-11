import express from "express";
import { register, getme } from "../controller/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.get("/getme", getme);

export default authRouter;
