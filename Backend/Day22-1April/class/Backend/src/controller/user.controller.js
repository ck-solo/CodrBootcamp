import userModel from "../models/user.model.js";
import followModel from "../models/follow.model.js";
import mongoose from "mongoose";
import postModel from "../models/post.model.js";

/**
 * GET /api/users/search?q=abhi
 */

export const searchUser = async (req, res) => {
  const { q } = req.query;
  const currentUser = req.user.id;

  const users = await userModel.aggregate(
  [
    {
      $search: {
        index: 'user_search_feature',
        autocomplete: {
          query: q,
          path: 'username'
        }
      }
    },
    {
      $lookup: {
        from: 'follows',
        as: 'followdoc',
        let: { searchUser: '$username' },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  {
                    $eq: [
                      '$followee',
                      '$$searchUser'
                    ]
                  },
                  {
                    $eq: ['$follower', new mongoose.Types.ObjectId(currentUser)]
                  }
                ]
              }
            }
          }
        ]
      }
    },
    {
      $addFields: {
        followStatus: {
          $cond: {
            if: {
              $eq: [{ $size: '$followdoc' }, 0]
            },
            then: 'not following',
            else: {
              $cond: {
                if: {
                  $eq: [
                    {
                      $arrayElemAt: [
                        '$followdoc.status',
                        0
                      ]
                    },
                    'pending'
                  ]
                },
                then: 'requested',
                else: 'following'
              }
            }
          }
        }
      }
    },
    {
      $project: {
        username: 1,
        fullname: 1,
        profilePicture: 1,
        followStatus: 1
      }
    }
  ],
  { maxTimeMS: 60000, allowDiskUse: true }
);

  res.status(200).json({
    message: "Users fetched successfully",
    users,
  });
};

export const followUser = async (req, res) => {
  const { userId } = req.params;
  const { id } = req.user;
  console.log(id);
  console.log("userId", userId);

  const isUserExist = await userModel.findById(userId);

  if (!isUserExist) {
    return res.status(404).json({
      message: "User not found",
      success: false,
    });
  }

  if (userId === id) {
    return res.status(400).json({
      message: "You cannot follow yourself",
      success: false,
    });
  }

  const alreadyFollowing = await followModel.findOne({
    follower: id,
    followee: userId,
  });

  if (alreadyFollowing) {
    return res.status(400).json({
      message: "You are already following this user",
      success: false,
    });
  }

  const follow = await followModel.create({
    follower: id,
    followee: userId,
  });

  return res.status(200).json({
    message: "Follow request sent successfully",
    success: true,
    follow,
  });
};

export const getFollowRequests = async (req, res) => {
  const loggedInUserId = req.user.id;

  const requests = await followModel.find({
    followee: loggedInUserId,
    status: "pending",
  }).populate("follower","usernameprofilePicture");

  return res.status(200).json({
    message:"Follow requests fetched successfully",
    success:true,
    requests
  })
};




export const acceptFollowRequest = async (req, res) => {

    const { requestId } = req.params;
    const loggedInUserId = req.user.id

    const followRequest = await followModel.findOne({
        _id: requestId,
        status: "pending",
        followee: loggedInUserId
    })

    if (!followRequest) {
        return res.status(404).json({
            message: "Follow request not found",
            success: false,
        })
    }

    followRequest.status = "accepted"
    await followRequest.save()

    return res.status(200).json({
        message: "Follow request accepted successfully",
        success: true,
    })

}

export const getprofileData = async(req,res)=>{
    const loggedInUserId = req.user.id
    const followerCount = await followModel.countDocuments({
        followee:loggedInUserId,
        status:"accepted"
    })

    const followingCount = await followModel.countDocuments({
        follower:loggedInUserId,
        status:"accepted"
    })
    
    const posts = await postModel.find({
        author: loggedInUserId,
    }).lean()

    res.status(200).json({
        message:"Profile fetched successfully",
        success:true,
        profile:{
            posts,
            followerCount,
            followingCount,
            postsCount : posts.length
        }
    })
}