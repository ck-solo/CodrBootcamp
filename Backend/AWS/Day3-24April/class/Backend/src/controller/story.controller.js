import storyModel from "../models/story.model.js";
import { uploadFile } from "../service/api.service.js";

export async function createStory(req, res) {
    const userId = req.user.id;
    const file = req.file;

    if (!file) {
        return res.status(400).json({ success: false, message: "Media file is required" });
    }

    try {
        const result = await uploadFile({
            buffer: file.buffer,
            fileName: file.originalname,
        });

        const story = await storyModel.create({
            user: userId,
            media: {
                url: result.url,
                media_type: file.mimetype.split("/")[0], // image or video
            },
        });

        res.status(201).json({
            success: true,
            message: "Story created successfully",
            story,
        });
    } catch (error) {
        console.error("Error creating story:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export async function getStories(req, res) {
    try {
        const stories = await storyModel
            .find()
            .populate("user", "username profilePicture")
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            message: "Stories fetched successfully",
            stories,
        });
    } catch (error) {
        console.error("Error fetching stories:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}
