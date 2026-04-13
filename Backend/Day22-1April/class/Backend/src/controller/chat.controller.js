import followModel from "../models/follow.model.js";
import mongoose from "mongoose";

export async function getChats(req, res) {
    const userId = req.user.id;
    const chats = await  followModel.aggregate(
        [
            {
                $match: {
                    $or: [
                        { followee: new mongoose.Types.ObjectId(userId) },
                        { follower: new mongoose.Types.ObjectId(userId) }
                    ],
                    status: 'accepted'
                }
            },
            {
                $addFields: {
                    user: {
                        $cond: {
                            if: {
                                $eq: [ '$follower', new mongoose.Types.ObjectId(userId) ]
                            },
                            then: '$followee',
                            else: '$follower'
                        }
                    }
                }
            },
            { $project: { user: 1 } },
            {
                $group: {
                    _id: '$user',
                    user: { $first: '$$ROOT' }
                }
            },
            {
                $project: {
                    _id: '$user._id',
                    user: '$user.user'
                }
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'user',
                    foreignField: '_id',
                    as: 'user'
                }
            },
            {
                $unwind: {
                    path: '$user',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $project: {
                    _id: '$user._id',
                    username: '$user.username',
                    profilePicture: '$user.profilePicture'
                }
            }
        ]
    )

    res.status(200).json({
        success: true,
        message: "Chats fetched successfully",
        chats
    })
}