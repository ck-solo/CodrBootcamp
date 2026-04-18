// import authmodel from "../models/auth.model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";
import userModel from "../models/user.model.js";

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
    const token = req.cookie.token;
    const decoded = jwt.verify(token,JWT_SECRET)

    res.status(200).json({
        message:"User fetch successfully",
        user:decoded
    })
}


export async function googleCallback(req,res){
  const {id , displayName, emails , photos} = req.user

  const isUserExists = await userModel.findOne({
    email:emails[ 0 ].value,
  })
  
  if(isUserExists){
    const token = jwt.sign({
      id: isUserExists._id,
    },
  JWT_SECRET,{
    expiresIn:'7d'
  })

  res.cookie("token",token)

  res.status(200).json({
    message:"User logged in successfully",
    sucess:true,
    user:{
      id:isUserExists._id,
      username:isUserExists.username,
      email:isUserExists.email,
      fullname:isUserExists.fullname,
      bio:isUserExists.bio,
      profileImage:isUserExists.profileImage,
      private:isUserExists.private,

    }
  })
  }

  const user = await userModel.create({
    username:emails[ 0 ].value.split("@")[ 0 ],
    email:emails[ 0 ].value,
    fullname: displayName,
    profileImage:photos[ 0 ].value,
  })

  const token = jwt.sign({
    id:user._id
  }, JWT_SECRET,{
    expiresIn:"7d"
  })

  res.cookie("token", token)

  return res.status(201).json({
    message:"User registerd successfully",
    success:true,
    user:{
      id: user._id,
            username: user.username,
            email: user.email,
            fullname: user.fullname,
            bio: user.bio,
            profileImage: user.profileImage,
            private: user.private,
    }
  })

}

