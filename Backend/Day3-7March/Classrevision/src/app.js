import express from "express";
import morgan from "morgan";
import postModel from "./models/post.model.js";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.post("/posts", async (req, res) => {
  const { name, role } = req.body;
  await postModel.create({
    name: name,
    role: role,
  });

  res.status(201).json({ message: "post is created" });
});

app.get("/posts", async (req, res) => {
  const posts = await postModel.find();

  console.log(posts);

  res.status(200).json({
    message: "post fetch successfully",
    posts,
  });
});

app.delete("/posts/:id", async (req, res) => {
  await postModel.findByIdAndDelete(req.params.id);

  res.status(200).json({ message: "post deleted successfully" });
});

app.patch("/posts/:id", async (req, res) => {
  const id = req.params.id;
  const { role } = req.body;

  await postModel.findByIdAndUpdate(id, { role });

  res.status(200).json({
    message: "post updated successfully",
  });
});

export default app;
