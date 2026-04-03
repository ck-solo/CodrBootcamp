import { Router } from "express";
import { followUser, searchUser } from "../controller/user.controller.js";

const userRouter = Router()

userRouter.get("/search", searchUser)
userRouter.post("/follow/:userId", followUser)

export default userRouter