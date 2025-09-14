import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/connectDB.js";
import cookieParser from "cookie-parser";
import authRouter from "./route/authRoute.js";
import userRouter from "./route/userRoute.js";
import cors from "cors"
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json())
app.use(cookieParser())

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}))

app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log("server started");
  connectDb();
});
