import express from "express";
import cookieParser from "cookie-parser";
import User from "../../model/User.js";
import Report from "./../../model/Report.js";
import QuizLive from "./../../model/QuizLive.js";
import jwt from "jsonwebtoken";
const router = express.Router();
const app = express();

router.post("/", async (req, res) => {
  console.log("Dashboard User");
  try {
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
    console.log(email);
    const user = await User.findOne({ email });
    console.log(user);

    const report = await Report.findOne({ email });
    // console.log(report);
    const quizdata = await QuizLive.findOne({ email });
    // console.log(quizdata);
    // const mergedData = { ...user, ...report };
    // console.log(mergedData);
    const mergedData = {
      email: user.email,
      fullName: `${user.firstName} ${user.lastName}`,

      quizPoints: report.quizPoints, // Added quizPoints
      highestScore: report.highestScore, // Added highestScore
      correctAnswers: report.correctAnswers,
      totalquiz:
        quizdata.attemptedQuizzes.length + quizdata.notAttemptedQuizzes.length,
      attemptquiz: quizdata.attemptedQuizzes.length,
      // Use string interpolation
      // ... other user and report data fields
    };
    // ... (token verification logic)
    console.log(mergedData);
    res.status(200).json(mergedData);
    // res.status(200).json({ Message: "Email Not Found" });
    return;
    // return res.status(200).json(mergedData);
  } catch (e) {
    console.log("Error", e);
    res.status(401).json({ message: "error" });
    return;
  }
});

export default router;
// ... other routes
