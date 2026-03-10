import app from "./src/app.js";
import mongoose from "mongoose";

async function connectdb() {
  await mongoose.connect(
    "mongodb+srv://server:LB3eILdo2MDmgvac@cluster0.wbtkagw.mongodb.net/day-4",
  );

  console.log("connect to db");
}
connectdb();

app.listen(3000, () => {
  console.log("server is running....");
});
