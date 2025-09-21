import express from "express"
import { googleAuth, login, logOut, resetPassword, sendOTP, signup, verifyOTP } from "../controller/authController.js";

const authRouter = express.Router();

authRouter.post("/signup", signup)
authRouter.post("/login",login)
authRouter.get("/logout",logOut)
authRouter.post("/sendotp",sendOTP)
authRouter.post("/verifyotp",verifyOTP)
authRouter.post("/resetpassword",resetPassword)
authRouter.post("/googleauth", googleAuth)


export default authRouter