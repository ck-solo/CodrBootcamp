import userModel from "../models/auth.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

export async function handleRegister(req, res) {
  try {
    const { username, email, fullname, password } = req.body;

    const userExists = await userModel.findOne({
      $or: [{ email }, { username }],
    });

    if (userExists) {
      return res
        .status(409)
        .json({ message: "user or email already exists", success: false });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
      username,
      email,
      fullname,
      password: hashpassword,
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
      message: "User register Successfully",
      success: true,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
        fullname: user.fullname,
      },
    });
  } catch (error) {
    console.log("REGISTER ERROR:", error); // 🔥 ADD THIS

    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
}

export async function loginRegister(req, res) {
  const { email, username, password } = req.body;


  const user = await userModel.findOne({
  $or: [{ email: email }, { username: username }]
});
   
  if (!user) {
    return res
      .status(409)
      .json({ message: "User not registerd", success: false });
  }

  const hashpass = await bcrypt.hash(password, 10);

  if (!hashpass) {
  return res.status(409).json({
    message: "Invalid Credentials",
    success: false
  });
}

  const token = jwt.sign(
    {
      id: user._id,
    },
    JWT_SECRET,
    {
      expiresIn: "7h",
    },
  );

  res.cookie("token", token);
  res.status(201).json({
    message: "User Login successfully",
    success: true,
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      fullname: user.fullname,
    },
  });
}

export async function getMe(req, res) {
  const user = await userModel.findById(req.user.id);

  return res.status(201).json({
    message: "User profile fetched Successfully",
    sucess: true,
    user: {
      id: user.id,
      email: user.email,
      username: user.username,
      fullname: user.fullname,
    },
  });
}
