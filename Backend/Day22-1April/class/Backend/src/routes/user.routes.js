import { Router } from "express";
import multer from "multer";
import {
  acceptFollowRequest,
  followUser,
  getFollowRequests,
  getprofileData,
  searchUser,
  updateProfile,
} from "../controller/user.controller.js";
import { authUser } from "../middleware/auth.middleware.js";
import {
  validateFollowRequest,
  validateFollowUser,
} from "../validation/validUser.validate.js";

const upload = multer({ storage: multer.memoryStorage() });
const userRouter = Router();

userRouter.get("/search", authUser, searchUser);
userRouter.post("/follow/:userId", validateFollowUser, authUser, followUser);

// userRouter.post("/follow-requests", authUser, getFollowRequests)
userRouter.get("/follow-requests", authUser, getFollowRequests);

userRouter.patch(
  "/follow-requests/:requestId",
  validateFollowRequest,
  authUser,
  acceptFollowRequest,
);
userRouter.get("/profile", authUser, getprofileData);
userRouter.patch("/profile", authUser, upload.single("profilePicture"), updateProfile);

export default userRouter;
