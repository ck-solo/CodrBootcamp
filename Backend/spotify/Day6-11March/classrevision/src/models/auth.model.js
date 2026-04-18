import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  userType: {
    type: String,
    enum: ["user", "artist"],
    default: "user",
  },
});

const userModel = mongoose.model("users", UserSchema);

export default userModel;
