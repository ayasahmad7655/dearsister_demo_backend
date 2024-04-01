import User from "../../model/User.js";
import Report from "../../model/Report.js";
import QuizLive from "../../model/QuizLive.js";
import Questions from "../../model/Questions.js";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
const router = express.Router();
const app = express();
import cookieParser from "cookie-parser";
app.use(cookieParser());
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      res.status(400).json({ Mess: "Enter ALl the Values" });
      return;
    }
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      res.status(400).json({ Mess: "Emaill Already Exists" });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    const newReport = new Report({
      email,
    });
    const questions = await Questions.find({});
    console.log(questions.map((question) => question.title));
    const newQuizLive = new QuizLive({
      email,
      attemptedQuizzes: [], // Use ObjectId constructor
      notAttemptedQuizzes: questions.map((question) => question.title), // Use question IDs
      // ... other fields as needed
    });

    console.log(newQuizLive);
    // newQuizLive.quizesdatas.deleteMany({
    //   attemptedQuizzes: { $undefined: true },
    // });
    await newQuizLive.save();
    await newUser.save();
    await newReport.save();
    // console.log(newUser);
    const token = jwt.sign(
      {
        user_email: newUser.email,
      },
      "aadaa"
    );
    // console.log(res.cookie);
    try {
      res.cookie("jwt", token, {
        // domain: "localhost:3000",
        // Credentials: "include",
        // httpOnly: true,
        // secure: true, // Only use in production (HTTPS)
      });
      console.log("ok");
    } catch (err) {
      console.error("Error setting cookie:", err);
      // Handle the error here (e.g., send an error response)
      res.status(500).json({ message: "Error creating cookie" });
      return;
    }

    console.log(res.cookie);
    res.status(200).json({ message: "User registered Suceesfully" });
    return;
  } catch (err) {
    console.log("err", err);

    res.status(500).json({ Error: err });
    return;
  }
});
export default router;
