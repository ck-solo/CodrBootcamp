import app from "./src/app.js"
import { ConnectDB } from "./src/config/data.js";

ConnectDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000....");
});
