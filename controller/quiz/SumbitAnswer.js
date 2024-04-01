import Questions from "../../model/Questions.js";
import express from "express";
import bcrypt from "bcrypt";
import User from "../../model/User.js";
import Report from "./../../model/Report.js";
import QuizLive from "./../../model/QuizLive.js";
import jwt, { decode } from "jsonwebtoken";
const router = express.Router();
const app = express();
import cookieParser from "cookie-parser";
app.use(cookieParser());

const SCOPES = ["https://www.googleapis.com/auth/drive"];

router.put("/", async (req, res) => {
  try {
    // const { firstName, lastName, email, password } = req.body;
    const Data = req.body;
    const jwtToken = req.cookies.jwt;
    console.log(jwtToken);
    const decoded = jwt.verify(jwtToken, "aadaa"); // Replace with your secret
    const email = decoded.user_email;
    console.log(decoded);
    // const user = await User.findOne({ email });
    // console.log(user);
    let report = await Report.findOne({ email });
    report.quizPoints = report.quizPoints + Data.correctAnswers * 10;
    report.correctAnswers = report.correctAnswers + Data.correctAnswers;
    if (Data.correctAnswers * 10 > report.highestScore) {
      report.highestScore = Data.correctAnswers * 10;
    }
    let quizLive = await QuizLive.findOne({ email });
    console.log(quizLive);
    // const questionIndex = parseInt(Data.index, 10); // Convert string index to integer
    // const questionToMove = quizLive.notAttemptedQuizzes.splice(
    //   questionIndex,
    //   1
    // )[0];
    // quizLive.attemptedQuizzes.push(questionToMove);

    const questionIndex = parseInt(Data.index, 10); // Convert string index to integer

    // Extract the question to move without mutating the original array
    // const questionToMove = quizLive.notAttemptedQuizzes[questionIndex];

    // Create a new array without the question, ensuring immutability
    quizLive.notAttemptedQuizzes = quizLive.notAttemptedQuizzes.filter(
      (quiz, index) => quizLive.notAttemptedQuizzes[index] != questionIndex
    );

    // Add the question to the attempted quizzes array
    console.log("INDEXX", questionIndex);
    quizLive.attemptedQuizzes.push(questionIndex);

    console.log(quizLive);
    // console.log(report);s
    await report.save();
    await quizLive.save();
    // const quizdata = await QuizLive.findOne({ email });
    // console.log(quizdata);
    // if (!firstName || !lastName || !email || !password) {
    //   res.status(400).json({ Mess: "Enter ALl the Values" });
    // Handle the error here (e.g., send an error response)
    console.log("Data", Data);
    // const newQuiz = new Questions(quizData);
    // console.log(newQuiz);
    // await newQuiz.save();
    // console.log(res.cookie);
    res.status(200).json({ message: "Sucessfully" });
    return;
  } catch (err) {
    console.log("jjj");
    console.log("err", err.message);

    res.status(500).json({ Error: err.message });
    return;
  }
});
export default router;
