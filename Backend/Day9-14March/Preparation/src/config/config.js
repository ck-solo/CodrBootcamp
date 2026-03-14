import dotenv from "dotenv";
dotenv.config()

export const config = {
    MONGO_URL:process.env.MONGO_URI,
    IMAGEKIT_URL:process.env.IMAGEKIT_PRIVATE_KEY,
    JWT_TOKEN:process.env.JWT_SECRET
}