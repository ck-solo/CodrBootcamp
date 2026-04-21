import chatMessageModel from "../models/Chat.model.js";
import followModel from "../models/follow.model.js";
import mongoose from "mongoose";

export async function getChats(req, res) {
  const userId = req.user.id;
  const chats = await followModel.aggregate([
    {
      $match: {
        $or: [
          { followee: new mongoose.Types.ObjectId(userId) },
          { follower: new mongoose.Types.ObjectId(userId) },
        ],
        status: "accepted",
      },
    },
    {
      $addFields: {
        user: {
          $cond: {
            if: {
              $eq: ["$follower", new mongoose.Types.ObjectId(userId)],
            },
            then: "$followee",
            else: "$follower",
          },
        },
      },
    },
    { $project: { user: 1 } },
    {
      $group: {
        _id: "$user",
        user: { $first: "$$ROOT" },
      },
    },
    {
      $project: {
        _id: "$user._id",
        user: "$user.user",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "user",
      },
    },
    {
      $unwind: {
        path: "$user",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $project: {
        _id: "$user._id",
        username: "$user.username",
        profilePicture: "$user.profilePicture",
      },
    },
  ]);

  res.status(200).json({
    success: true,
    message: "Chats fetched successfully",
    chats,
  });
}

export async function getMessages(req, res) {

  let loggedInUser = req.user.id;
  let otherUserId = req.params.userId;

  console.log(otherUserId)

  const canChat = await followModel.find({
    $or: [
      { follower: loggedInUser, followee: otherUserId },
      { follower: otherUserId, followee: loggedInUser },
    ],
    status: "accepted",
  });

  if (!canChat) {
    return res.status(403).json({
      message: "You are not allowed to chat with this user ",
      success: false,
    });
  }

  const messages = await chatMessageModel.find({
    $or: [
      { sender: loggedInUser, receiver: otherUserId },
      { receiver: loggedInUser, sender: otherUserId },
    ]
  });

  return res.status(200).json({
    message: "Messages fetched successfully",
    success: true,
    messages,
  });
}
