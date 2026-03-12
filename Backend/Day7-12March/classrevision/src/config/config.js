import dotenv from "dotenv"
dotenv.config()

export const config ={
    IMAGE_KIT : process.env.IMAGEKIT_PRIVATE_KEY
}