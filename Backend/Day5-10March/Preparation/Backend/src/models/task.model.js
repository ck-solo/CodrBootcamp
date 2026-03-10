import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  name: String,
  role: String,
});

const taskModel = mongoose.model("task2", taskSchema);

export default taskModel;
