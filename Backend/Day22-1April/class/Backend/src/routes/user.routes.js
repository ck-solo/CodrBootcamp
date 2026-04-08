import { Router } from "express";
import { followUser, getFollowRequests, searchUser } from "../controller/user.controller.js";
import { authUser } from "../middleware/auth.middleware.js";

const userRouter = Router()

userRouter.get("/search",authUser, searchUser)
userRouter.post("/follow/:userId", authUser,followUser)

userRouter.post("/follow-requests", authUser, getFollowRequests)

export default userRouter