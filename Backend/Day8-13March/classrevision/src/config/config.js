import dotenv from "dotenv"
dotenv.config()

export const config={
    MONGO_URL : process.env.MONGO_URI,
    JWT_SECRET : process.env.JWT_SECRET,
    IMAGE_KIT : process.env.IMAGE_KIT
}