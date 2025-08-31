import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDB.js";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log("server started");
  connectDb();
});
