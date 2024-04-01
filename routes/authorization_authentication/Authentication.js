import express from "express";
import cookieParser from "cookie-parser";
import User from "../../model/User.js";
import Report from "./../../model/Report.js";
import jwt from "jsonwebtoken";
const router = express.Router();
const app = express();

app.use(cookieParser()); // Replace with your secret key

const verifyToken = async (req, res, next) => {
  console.log("Auth");
  try {
    console.log("Cookies", req.cookies);
    console.log(req.body);
    const tokenString = req.body.cookie; // Assuming your cookie is named 'auth_token'
    const parts = tokenString.split("=");
    const token = parts.length > 1 ? parts[1] : tokenString;
    console.log(token);
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, "aadaa"); // Replace with your secret key

    const email = decoded.user_email;
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    req.emailData = email;

    console.log(req.emailData);
    console.log("aaa");

    next();
    res.status(200).json({ jjkj: "hbhbh" });
    console.log("AA");
  } catch (e) {
    console.log("Error", e);
    res.status(401).json({ message: "error" });
  }
};

export default verifyToken;
