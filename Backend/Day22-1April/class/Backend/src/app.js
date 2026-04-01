import express from "express";
import morgan from "morgan";
import userRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import postRouter from "./routes/post.route.js";
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser())

app.use("/api/auth", userRouter)
app.use("/api/post", postRouter)

export default app;
