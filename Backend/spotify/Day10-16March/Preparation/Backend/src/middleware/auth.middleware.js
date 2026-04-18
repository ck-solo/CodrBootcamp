import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

export async function checkuser(req, res, next) {
  console.log("Hello" + req.cookie);
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
      sucess: false,
    });
  }

  const decoded = jwt.verify(token, JWT_SECRET);

  if (decoded.userType !== "artist") {
    return res.status(403).json({
      message: "aap singer nhi ho",
      sucess: false,
    });
  }

  req.user = decoded;
  next();
}
