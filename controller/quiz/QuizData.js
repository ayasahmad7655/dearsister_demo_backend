import express from "express";
import cookieParser from "cookie-parser";
import QuizLive from "../../model/QuizLive.js";
import jwt from "jsonwebtoken";
const router = express.Router();
const app = express();

router.post("/", async (req, res) => {
  try {
    console.log("Quiz Data");
    // console.log(req.emailData);
    const email = req.emailData;
    const QuizDatas = await QuizLive.findOne({ email });
    console.log(QuizDatas);
    // console.log("aaa");
    res.status(200).json(QuizDatas);
    // const report = await Report.findOne({ email });
    // console.log(report);
    // const mergedData = { ...user, ...report };
    // console.log(mergedData);
    // const mergedData = {
    //   email: user.email,
    //   fullName: `${user.firstName} ${user.lastName}`,

    //   quizPoints: report.quizPoints, // Added quizPoints
    //   highestScore: report.highestScore, // Added highestScore
    //   correctAnswers: report.correctAnswers,

    // Use string interpolation
    // ... other user and report data fields
    // };
    // ... (token verification logic)
    // res.status(200).json({});
    // res.status(200).json({ Message: "Email Not Found" });
    return;
    // return res.status(200).json(mergedData);
  } catch (e) {
    // console.log("Error", e);
    res.status(401).json({ message: "error" });
    return;
  }
});

export default router;
// ... other routes
