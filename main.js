import express from "express";
import dotenv from "dotenv";
import router from "./routes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});
//test

// User routes
app.use(router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
