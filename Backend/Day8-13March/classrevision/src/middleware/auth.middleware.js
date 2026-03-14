import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

async function checkArtist(req, res, next) {

  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
      success: false,
    }); 
  }

  const decoded = jwt.verify(token, config.JWT_SECRET);
  console.log(decoded);

  if (decoded.userType !== "artist") {
    return res.status(401).json({
      message: "Tum Artist nhi ho.",
      success: false,
    });
  }

  req.user = decoded;

  next();
}

export default checkArtist;
 