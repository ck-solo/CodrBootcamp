import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    media: {
        url: {
            type: String,
            required: true
        },
        media_type: {
            type: String,
            enum: ["image", "video"],
            required: true
        }
    },
    // Stories typically expire after 24 hours. 
    // We can use TTL index for this.
    createdAt: {
        type: Date,
        default: Date.now,
        index: { expires: '24h' } 
    }
});

const storyModel = mongoose.model("story", storySchema);

export default storyModel;
