import { Router } from "express";
import { authUser } from "../middleware/auth.middleware";
import { getPosts } from "../controller/post.controller";

const userData = Router()

userData.get("/userData", authUser,)