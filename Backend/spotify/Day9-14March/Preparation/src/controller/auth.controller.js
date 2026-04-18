import userModel from "../models/auth.models.js";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export async function register(req, res) {
  const { email, password , userType} = req.body;

  const user = await userModel.create({
    email,
    password,
    userType
  });

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    config.JWT_TOKEN,
    {
      expiresIn: "1h",
    },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "User registered successfully",
    user,
  });
}

export async function login(req, res) {
  const { email, password } = req.body;

  const user = await userModel.findOne({
    email,
  });

  if (!user) {
    return res.status(404).json({
      message: "user not found",
      success: false,
    });
  }

  const isPasswordValid = user.password === password;

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid password",
      success: false,
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      userType: user.userType,
    },
    config.JWT_TOKEN,
    {
      expiresIn: "1h",
    },
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "User logged in successsfully",
    user,
  });
}

export async function getMe(req, res) {
  const token = req.cookies.token;

  const decoded = jwt.verify(token, config.JWT_TOKEN);

  res.status(200).json({
    message: "User fetch successfully",
    user: decoded,
  });
}
