import { Router } from "express";
import { authUser } from "../middleware/auth.middleware.js";
import { getChats } from "../controller/chat.controller.js";

const chatRouter = Router()

chatRouter.get("/", authUser, getChats)

export default chatRouter