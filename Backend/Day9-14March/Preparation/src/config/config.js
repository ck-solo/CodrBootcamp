import dotenv from "dotenv";
dotenv.config()

export const config = {
    MONGO_URL:process.env.MONGO_URL,
    IMAGEKIT_URL:process.env.IMAGEKIT_URL,
    JWT_TOKEN:process.env.JWT_TOKEN
}