import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Dummy data
const users = [
  { id: 1, name: "Lucy" },
  { id: 2, name: "John" },
  { id: 3, name: "Alex" }
];

app.get("/", (req, res) => {
  res.send("Docker Practice App Running 🚀");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/env", (req, res) => {
  res.json({
    message: process.env.MESSAGE
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});