import express from 'express';
import morgan from 'morgan';
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import songRouter from './routes/song.routes.js';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRouter)
app.use("/api/song",songRouter)



export default app;