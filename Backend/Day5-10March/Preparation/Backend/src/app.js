import express from "express";
import taskModel from "./models/task.model.js";
import morgan from "morgan";
import cors from "cors"

const app = express();

app.use(cors())

app.use(express.json());
app.use(morgan("dev"));

app.post("/task2", async (req, res) => {
  const { name, role } = req.body;

  await taskModel.create({
    name: name,
    role: role,
  });

  res.status(201).json({ message: "post is created successfully" });
});

app.get("/task2", async (req, res) => {
  const task = await taskModel.find({});

  res.status(201).json({ message: "post fetch successfully", task });
});

app.delete("/task2/:id", async (req, res) => {
  await taskModel.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "post is deleted successfully" });
});

app.patch("/task2/:id", async (req, res) => {
  const id = req.params.id;
  const { name, role } = req.body;

  await taskModel.findByIdAndUpdate(id, { name, role });
  res.status(200).json({ message: "post updated successfully." });
});

export default app;
