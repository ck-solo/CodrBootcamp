import followModel from "../models/follow.model.js";

export async function getChats(req, res) {
    const userId = req.user.id;
    const chats = await followModel.find({
        $or: [
            { follower: userId },
            { following: userId }
        ],
        status: "accepted"
    }).populate("follower", "username profilePicture fullName") 

    res.status(200).json({
        success: true,
        message: "Chats fetched successfully",
        chats
    })
}