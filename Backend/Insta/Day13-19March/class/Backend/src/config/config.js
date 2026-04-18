import dotenv from "dotenv";
dotenv.config();
 
export const { MONGO_URI,JWT_SECRET,IMAGE_KIT, GOOGLE_CLIENT_SECRET, GOOGLE_CLIENT_ID , CALLBACK_URL} = process.env