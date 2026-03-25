import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: function () {
      return !this.googleID;
    },
  },
  googleID: {
    type: String,
    unique: true,
  },
});

const userModel = mongoose.model("userData", userSchema)

export default userModel
