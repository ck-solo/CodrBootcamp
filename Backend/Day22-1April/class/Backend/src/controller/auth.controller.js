import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

export async function register(req, res) {
  try {
    const { username, email, password, fullname } = req.body;

    const userExist = await userModel.findOne({
      $or: [{ email }, { username }],
    });

    if (userExist) {
      return res.status(409).json({
        message: "Email or username already registered",
        success: false,
      });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      username,
      fullname,
      password: hashPassword,
      email,
    });

    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    res.cookie("token", token);

    res.status(201).json({
      message: "User register successfully",
      success: true,
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        fullname: user.fullname,
      },
    });
  } catch (error) {
    console.log("Register Error: ", error);

    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

export async function login(req, res) {
  try {
    const { username, email, password } = req.body;
    const user = await userModel.findOne({
      $or: [{ email }, { username }],
    });

    if (!user) {
      return res
        .status(409)
        .json({ message: "User does not exist", success: false });
    }

    const hashpass = await bcrypt.compare(password, user.password);
    if (!hashpass) {
      return res.status(409).json({
        message: "Invalid Credentials",
        success: false,
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    res.cookie("token", token);

    res.status(200).json({
      message: "user login successfully",
      success: true,
      user: user,
    });
  } catch (error) {
    console.log("Login Error", error);
    return res.status(500).json({ message: error.message, success: false });
  }
}

export async function getMe(req, res) {
  const user = await userModel.findById(req.user.id);
  

  return res.status(201).json({
    message: "user profile fetched successfully",
    success: true,
    user: {
      id: user.id,
      email: user.email,
      fullname: user.fullname,
      username: user.username,
      profilePicture: user.profilePicture,
    },
  });
}

export async function logout(req, res) {
  res.clearCookie("token");
  return res.status(200).json({
    message: "User logged out successfully",
    success: true,
  });
}
