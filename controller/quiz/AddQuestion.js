import Questions from "../../model/Questions.js";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const router = express.Router();
const app = express();
import cookieParser from "cookie-parser";
app.use(cookieParser());
router.post("/", async (req, res) => {
  try {
    // const { firstName, lastName, email, password } = req.body;
    const quizData = req.body;
    // if (!firstName || !lastName || !email || !password) {
    //   res.status(400).json({ Mess: "Enter ALl the Values" });
    // Handle the error here (e.g., send an error response)
    // console.log(quizData);
    const newQuiz = new Questions(quizData);
    // console.log(newQuiz);
    await newQuiz.save();
    // console.log(res.cookie);
    res.status(200).json({ message: "QuestionAddSucessfully" });
    return;
  } catch (err) {
    console.log("jjj");
    console.log("err", err.message);

    res.status(500).json({ Error: err.message });
    return;
  }
});
export default router;
