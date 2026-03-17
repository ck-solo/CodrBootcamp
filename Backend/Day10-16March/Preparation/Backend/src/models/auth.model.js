import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
  email: String,
  password: String,
  userType: {
    type: String,
    emum: ["user", "artist"],
  },
});

const authModel = mongoose.model("userdata", authSchema);

export default authModel;
