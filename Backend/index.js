import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDB.js";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json())
express.use(cookieParser())

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log("server started");
  connectDb();
});
