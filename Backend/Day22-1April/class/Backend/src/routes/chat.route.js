import { Router } from "express";
import { authUser } from "../middleware/auth.middleware.js";
import { getChats, getMessages } from "../controller/chat.controller.js";

const chatRouter = Router()

chatRouter.get("/", authUser, getChats)
chatRouter.get("/messages/:userId", authUser, getMessages)

export default chatRouter