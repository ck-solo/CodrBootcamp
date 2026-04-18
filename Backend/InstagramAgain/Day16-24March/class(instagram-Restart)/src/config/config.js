import dotenv from "dotenv";
dotenv.config();

if(!MONGO_URI){
    throw new Error("MONGO_URI is not defined in environment variables.")
}

if(!JWT_SECRET){
    throw new Error("JWT_SECRET is not defined in environement variables.")
}
 
export const { MONGO_URI,JWT_SECRET,IMAGE_KIT, GOOGLE_CLIENT_SECRET, GOOGLE_CLIENT_ID , CALLBACK_URL} = process.env