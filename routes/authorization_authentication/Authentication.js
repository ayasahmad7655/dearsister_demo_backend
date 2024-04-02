import express from "express";
import cookieParser from "cookie-parser";
import User from "../../model/User.js";
import Report from "./../../model/Report.js";
import jwt from "jsonwebtoken";
const router = express.Router();
const app = express();

app.use(cookieParser()); // Replace with your secret key

const verifyToken = async (req, res, next) => {
  console.log("Verify Token");
  try {
    // console.log("Cookies", req.cookies);
    console.log(req.body);
    const tokenString = req.body.cookie; // Assuming your cookie is named 'auth_token'
    console.log("TokenString", tokenString);
    const indexOfEqual = tokenString.indexOf("=");

    const tokens = tokenString.slice(indexOfEqual + 1);
    const token = tokens.slice(0, -1);
    console.log(token);
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, "aadaa"); // Replace with your secret key

    const email = decoded.user_email;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(400).json({ message: "User Unauthorized" });
      return;
    }

    req.emailData = email;

    console.log(req.emailData);
    console.log("aaa");

    next();
    // res.status(200).json({ jjkj: "hbhbh" });
    // return;
    // console.log("AA");
    // return;
  } catch (e) {
    console.log("Error", e);
    res.status(401).json({ message: "error" });
  }
};

export default verifyToken;
