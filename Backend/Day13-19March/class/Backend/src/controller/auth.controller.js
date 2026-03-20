import authmodel from "../models/auth.model.js";
import crypto, { hash } from "crypto";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

export async function register(req, res) {
  const { email, password } = req.body;

  const hashPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  const data = await authmodel.create({
    email,
    password: hashPassword,
  });

  const token = jwt.sign(
    {
      id: data._id,
      email: data.email,
    },
    JWT_SECRET,
    {
      expiresIn: "2h",
    },
  );

  res.cookie("token", token);

  res.status(201).json({ message: "User registered Successfully", data });
}

export async function login(req, res) {
  const { email, password } = req.body;
  const user = await authmodel.findOne({
    email
  });

  if(!user){
    return res.status(400).json({message:"user not found", success:false,})
  }
  const hashPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

    const ispassValid = user.password = hashPassword

    if(!ispassValid){
        return res.status(400).json({
            message:"Invalid Pass",
            success:false,
        })

    }

  const token = jwt.sign(
    {
      email, 
      password 
    },
    JWT_SECRET,
    {
      expiresIn: "2h",
    },
  );

  res.cookie("token", token);

  res.status(200).json({ message: "User login succesfully", user });
}


export async function getme(req,res){
    const token = res.cookie.token;
    const decoded = jwt.verify(token,JWT_SECRET)

    res.status(200).json({
        message:"User fetch successfully",
        user:decoded
    })
}