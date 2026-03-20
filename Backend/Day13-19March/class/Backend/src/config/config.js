import dotenv from "dotenv";
dotenv.config();

console.log(process.env.JWT);
export const { MONGO_URI,JWT_SECRET,IMAGE_KIT } = process.env
