import { getme, register } from "../controller/music.controller.js";
import express from "express";
const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.get("/getme", getme);

export default authRouter;
