import { Router } from "express";
import { followUser, searchUser } from "../controller/user.controller.js";
import { authUser } from "../middleware/auth.middleware.js";

const userRouter = Router()

userRouter.get("/search", searchUser)
userRouter.post("/follow/:userId", authUser,followUser)

export default userRouter