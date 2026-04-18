import { Router } from "express";
import { googleCallback, register } from "../controller/auth.controller.js";
import passport from "passport";

const authRouter = Router();

authRouter.post("/register", register);

authRouter.post("/login", (req, res) => {
  res.json({ message: "Login endpoint" });
});

authRouter.post("/logout", (req, res) => {
  res.json({ message: "Logout endpoint" });
});

authRouter.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
);

authRouter.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  googleCallback,
);

export default authRouter;
