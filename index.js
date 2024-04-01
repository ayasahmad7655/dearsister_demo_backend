import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import LoginRoutes from "./routes/authorization_authentication/LoginRoutes.js";
import bodyParser from "body-parser";
import SignUpRoutes from "./routes/authorization_authentication/SignUpRoutes.js";
import verifyToken from "./routes/authorization_authentication/Authentication.js";
import Dashboard from "./routes/user/Dashboard.js";
import AddQuestion from "./routes/quiz/AddQuestion.js";
import QuizData from "./routes/quiz/QuizData.js";
import SumbitAnswer from "./routes/quiz/SumbitAnswer.js";
import QuestionsRetrieval from "./controller/quiz/QuestionRetrieval.js";
import DriveUpload from "./routes/quiz/DriveUpload.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

dotenv.config();
/* <------------------MiddleWares--------------------> */
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your frontend's origin
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
/* <------------------Routes------------------------->  */
app.use("/login", LoginRoutes);
app.use("/signup", SignUpRoutes);
app.use("/user", Dashboard);
app.use("/quiz", verifyToken, QuizData);
app.use("/addquestion", AddQuestion);
app.use("/sumbitanswer", verifyToken, SumbitAnswer);
app.use("/driveupload", DriveUpload);
app.get("/livequiz/:index", QuestionsRetrieval);

/* <-------------------Connection Established And MongoDb Connection-------------->  */
app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connection to Mongodb ");
    })
    .catch((err) => {
      console.error(err);
    });
  console.log("Connection Settled on Port:-", process.env.PORT);
});
