import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import postRouter from "./routes/post.route.js";
import cors from "cors";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.routes.js";
import storyRouter from "./routes/story.route.js";
import chatRouter from "./routes/chat.route.js";
import path from "path";

const app = express();
app.use(express.static(path.resolve("dist")));
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",  
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  }),
);

app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/users", userRouter);
app.use("/api/stories", storyRouter);
app.use("/api/chats", chatRouter);

app.get("*", (req, res) => {
  console.log(req.params)
  res.sendFile("index.html", { root: "dist" });
});

export default app;
