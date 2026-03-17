import dotenv from "dotenv";
dotenv.config();

console.log(process.env.JWT_SECRET)

export const { MONGO_URI, JWT_SECRET, IMAGE_KIT  } = process.env;