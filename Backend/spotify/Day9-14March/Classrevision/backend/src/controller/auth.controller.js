import authModel from "../models/auth.model.js";
import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
import crypto from "crypto";

export async function register(req, res) {
  const { email, password, userType } = req.body;
  const hashPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  const user = await authModel.create({
    email,
    password: hashPassword,
    userType,
  });

  const token = jwt.sign({
     id:user._id, 
    email:user.email,
     userType:user.userType
     }, config.JWT_TOKEN,{
        expiresIn:"1h"
     });

  res.cookie("token", token);

  res.status(201).json({
    message: "user created successfully",
    user,
  });
}

export async function login(req, res) {
  const { email, password } = req.body;

  const hashPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  const user = await authModel.findOne({
    email,
    password: hashPassword,
  });
  if (!user) {
    return res.status(400).send("user not found");
  }

  const token = jwt.sign(
    {
        id:user._id,
        email:user.email,
      userType: user.userType,
    },
    config.JWT_TOKEN,
    {
      expiresIn: "1h",
    },
  );

  res.cookie("token", token);

  res.status(200).json({ message: "login succesfully" }, user);
}

export async function getme(req, res) {
  const token = req.cookie.token;

  const decoded = jwt.verify(token, config.JWT_TOKEN);

  res.status(200).json({ message: "user fetched successfully", user: decoded });
}
