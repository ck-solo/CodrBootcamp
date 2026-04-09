import postModel from "../models/post.model.js";
import { uploadFile } from "../service/api.service.js";

export async function createPost(req, res) {
    const author = req.user.id;
  const { caption } = req.body;
  const files = req.files;

    const media = await Promise.all(
      files.map(async (file) => {
        const result = await uploadFile({
          buffer: file.buffer,
          fileName: file.originalname,
        });
        
        return {
          url: result.url,
          media_type: file.mimetype.split("/")[0],
        };
      }),
    );

    const post = await postModel.create({
      caption,
      author,
      media: media.filter(
        (m) => m.media_type === "image" || m.media_type === "video",
      ),
    });

  return res.status(201).json({
    success: true,
    message: "post created successfully",
    post,
  });
}

export async function getPosts(req, res) {

  const posts = await postModel
    .find()
    .sort({ createdAt: -1 })
    .populate("author", "username profilePicture fullName")
    .populate("comments.user", "username profilePicture");
   

  res.status(200).json({
    success: true,
    message: "Post fetched successfully",
    posts
  });
}

export async function likePost(req, res) {
  const { postId } = req.params;
  const userId = req.user.id;

  const post = await postModel.findById(postId);
  if (!post) {
    return res.status(404).json({ success: false, message: "Post not found" });
  }

  const isLiked = post.likes.includes(userId);

  if (isLiked) {
    post.likes = post.likes.filter((id) => id.toString() !== userId.toString());
  } else {
    post.likes.push(userId);
  }

  await post.save();
  
  // Return updated post with populated author and comments
  const updatedPost = await postModel.findById(postId)
    .populate("author", "username profilePicture fullName")
    .populate("comments.user", "username profilePicture");

  res.status(200).json({
    success: true,
    message: isLiked ? "Post unliked" : "Post liked",
    post: updatedPost
  });
}

export async function addComment(req, res) {
  const { postId } = req.params;
  const { text } = req.body;
  const userId = req.user.id;

  if (!text) {
    return res.status(400).json({ success: false, message: "Comment text is required" });
  }

  const post = await postModel.findById(postId);
  if (!post) {
    return res.status(404).json({ success: false, message: "Post not found" });
  }

  post.comments.push({ user: userId, text });
  await post.save();

  // Return updated post with populated author and comments
  const updatedPost = await postModel.findById(postId)
    .populate("author", "username profilePicture fullName")
    .populate("comments.user", "username profilePicture");

  res.status(201).json({
    success: true,
    message: "Comment added successfully",
    post: updatedPost
  });
}

export async function deleteComment(req, res) {
  const { postId, commentId } = req.params;
  const userId = req.user.id;

  try {
    const post = await postModel.findById(postId);
    if (!post) {
      return res.status(404).json({ success: false, message: "Post not found" });
    }

    // Find the comment index
    const commentIndex = post.comments.findIndex(c => c._id.toString() === commentId);
    if (commentIndex === -1) {
      return res.status(404).json({ success: false, message: "Comment not found" });
    }

    const comment = post.comments[commentIndex];

    // Only comment owner or post owner can delete
    if (comment.user.toString() !== userId && post.author.toString() !== userId) {
      return res.status(403).json({ success: false, message: "Unauthorized to delete this comment" });
    }

    // Remove the comment
    post.comments.splice(commentIndex, 1);
    await post.save();

    // Return updated post
    const updatedPost = await postModel.findById(postId)
      .populate("author", "username profilePicture fullName")
      .populate("comments.user", "username profilePicture");

    res.status(200).json({
      success: true,
      message: "Comment deleted successfully",
      post: updatedPost
    });
  } catch (error) {
    console.error("Error deleting comment:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}
