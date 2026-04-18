import express from "express";
import morgan from "morgan";
import authRouter from "./routes/auth.routes.js";
import songRouter from "./routes/song.routes.js";
import parser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(parser());

app.use("/api/auth", authRouter);
app.use("/api/song", songRouter);

export default app;
