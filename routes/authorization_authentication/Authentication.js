import express from "express";
import cookieParser from "cookie-parser";
import User from "../../model/User.js";
import Report from "./../../model/Report.js";
import jwt from "jsonwebtoken";
const router = express.Router();
const app = express();

app.use(cookieParser()); // Replace with your secret key
// const verifyToken = (req, res, next)
const verifyToken = async (req, res, next) => {
  // router.get("/", async (req, res, next) => {
  console.log("Auth");
  try {
    // console.log(req);
    const token = req.cookies.jwt; // Assuming your cookie is named 'auth_token'
    // console.log(token);
    if (!token) {
      // console.log(token);
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, "aadaa"); // Replace with your secret key
    // console.log(decoded);
    const email = decoded.user_email;
    const user = await User.findOne({ email });
    // console.log("USER", user);
    if (!user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }
    // console.log(req);
    req.emailData = email;
    // console.log("aaa");
    next();
    console.log("aaa");
    // const decoded = jwt.verify(token, "aadaa"); // Replace with your secret key
    // console.log(decoded);
    // const email = decoded.user_email;
    // const user = await User.findOne({ email });
    // console.log(user);
    // if (!user) {
    //   res.status(401).json({ message: "Unauthorized" });
    //   return;
    // }
    // const report = await Report.findOne({ email });
    // console.log(report);
    // // ... (token verification logic)
    // // return res.status(401).json({ message: "Unauthorized" });
    // // next();
  } catch (e) {
    console.log("Error", e);
    res.status(401).json({ message: "error" });
  }
};

export default verifyToken;
// ... other routes
