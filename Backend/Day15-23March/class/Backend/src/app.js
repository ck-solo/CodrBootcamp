import express from "express"
import morgan from "morgan"
import authRouter from "./routes/auth.route.js"
import postRouter from "./routes/post.route.js"
import followRouter from "./routes/follow.route.js"
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET,  } from "./config/config.js";
import cookieParser from "cookie-parser"
import passport from "passport";
import commentRouter from "./routes/comment.route.js";
import messageRouter from "./routes/message.route.js"
import likeRouter from "./routes/like.route.js"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.use(cors())
app.use(cookieParser())
app.use(passport.initialize())

passport.use(new GoogleStrategy({
    clientID:GOOGLE_CLIENT_ID,
    clientSecret:GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
},(accessToken, refreshToken, profile, done)=>{
    return done(null, profile)
}))



app.use("/api/auth", authRouter)
app.use("/api/post", postRouter)
app.use("/api/comments",commentRouter)
app.use("/api/follows", followRouter)
app.use("/api/messages", messageRouter)
app.use("/api/likes",likeRouter)

export default app 