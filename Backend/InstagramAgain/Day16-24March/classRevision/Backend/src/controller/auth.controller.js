import userModel from "../models/auth.model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

export async function register(req, res) {
  const { username, password, email, fullname } = req.body;

  const isUserExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserExists) {
    return res.status(422).json({
      message: "User with this email or username already exists",
      success: false,
    });
  }

  const hashPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  const user = await userModel.create({
    email,
    username,
    password: hashPassword,
    fullname,
  });

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

  res.status(200).json({
    message: "User register successfully",
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
  const { email, password, username } = req.body;

  const user = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  if (!user) {
    return res
      .status(400)
      .json({ message: "user already exists", success: false });
  }

  const hashPassword = crypto.createHash("sha256").update(password).digest("hex")

  if(hashPassword !== user.password){
    return res.status(400).json({message:"Invalid credentials", success:false})
  }

  const token = jwt.sign({
    id:user.id,
  },JWT_SECRET,{
    expiresIn:"7d"
  })

  res.cookie("token",token)

  res.status(200).json({
    message:"User login successfully",
    success:true,
    user:{
        id:user._id,
        username:user.username,
        fullname:user.fullname,
        email:user.email
    }
  })
}

export async function getMe(req,res){
    const user = await userModel.findById(req.user.id)

    return res.status(200).json({message:"user",
        success:true,
        user:{
            id:user._id,
            username:user.username,
            email:user.email,
            fullname:user.fullname
        }
    })
}