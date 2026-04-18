import userModel from "../models/user.model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

export async function register(req, res) {
  const { username, email, fullname, password } = req.body;

  const userexists = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  if (userexists) {
    return res
      .status(400)
      .json({ message: "Username is already exists", success: false });
  }

  const hashPass = crypto.createHash("sha256").update(password).digest("hex");

  const user = await userModel.create({
    username,
    email,
    fullname,
    password: hashPass,
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

  res.status(200).json({
    message: "user registered successfully",
    success: true,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      fullname: user.fullname,
    },
  });
}

export async function login(req, res) {
  const { email, username, password } = req.body;
  const user = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  if (!user) {
    return res
      .status(402)
      .json({ message: "Invalid username or emaial", success: false });
  }

  const hashPass = crypto.createHash("sha256").update(password).digest("hex");

  if (hashPass !== user.password) {
    return res
      .status(402)
      .json({ message: "Invalid credentials", success: false });
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
    message: "User login successfully",
    success: true,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
      fullname: user.fullname,
    },
  });
}

export async function getMe(req, res) {
  const user = await userModel.findById(req.user.id);

  return res.status(200).json({
    message: "user profile fetched successfully",
    success: true,
    user: {
      id: user.id,
      username: user.username,
      fullname: user.fullname,
      email: user.email,
    },
  });
}

export async function googleAuthCallback(req, res) {
   
  const {
    id,
    displayName,
    emails: [{ value: email }],
  } = req.user;

  const username = email.split("@")[0];

  const isUserExists = await userModel.findOne({
    $or: [{ googleID: id }, { email }, { username }],
  });

  if (!isUserExists) {
    const user = await userModel.create({
      username,
      email,
      fullname: displayName,
      googleId: id,
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

    return res.status(201).json({
      message: "User registered successfully",
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        fullname: user.fullname,
      },
    });
  }

  const token = jwt.sign(
    {
      id: isUserExists._id,
    },
    JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );

  res.cookie("token", token);

  return res.status(200).json({
    message: "User logged in successfully",
    success: true,
    user: {
      id: isUserExists._id,
      username: isUserExists.username,
      email: isUserExists.email,
      fullname: isUserExists.fullname,
    },
  });
   
}
