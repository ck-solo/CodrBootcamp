import dotenv from "dotenv";
dotenv.config()

export const {JWT_SECRET, MONGO_URL, IMAGEKIT_PRIVATE_KEY, IMAGEKIT_PUBLIC_KEY, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env