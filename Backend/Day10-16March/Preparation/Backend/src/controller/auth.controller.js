import { JWT_SECRET } from "../config/config.js";
import authModel from "../models/auth.model.js";
import jwt from "jsonwebtoken";
import crypto from "crypto";

export async function register(req, res) {
  const { email, password, userType = "user" } = req.body;
  console.log(req.body)

  const hashPass = crypto.createHash("sha256").update(password).digest("hex");

  const user = await authModel.create({
    email,
    password: hashPass,
    userType,
  });

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      userType: user.userType,
    },
    JWT_SECRET,
    {
      expiresIn: "1h",
    },
  );

  res.cookie("token", token);
  res.status(200).json({
    message: "user registration successfully",
    user,
  });
}

export async function login(req, res) {
  const { email, password } = req.body;

  const user = await authModel.findOne({
    email,
  });

  if (!user) {
    return res.status(400).json({
      message: "user not found",
      success: false,
    });
  }

  const hashPass = crypto.createHash("sha256").update(password).digest("hex");

  const ispassValid = user.password == hashPass;

  if (!ispassValid) {
    return res.status(400).json({
      message: "Invalid Pass",
      success: false,
    });
  }

  const token = jwt.sign(
    {
      email,
      password,
      userType,
    },
    JWT_SECRET,
    {
      expiresIn: "1h",
    },
  );

  res.status("token", token);

  res.status(400).json({
    message: "user login successfully",
    user,
  });
}



export async function getMe(req, res) {
  const token = req.cookie.token;

  const decoded = jwt.verify(token, JWT_SECRET);

  res.status(200).json({
    message: "User fetch successfully",
    user: decoded,
  });
}
