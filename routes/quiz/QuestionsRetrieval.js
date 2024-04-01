import express from "express";
// const router = express.Router();
const app = express();
import QuestionRetrieval from "./../../controller/quiz/QuestionRetrieval.js";
app.get("/", QuestionRetrieval);

// router.get("/lo", (req, res) => {
//   try {
//     res.status(200).send("No Error Shown");
//   } catch (e) {
//     res.status(404).send("Error Shown ");
//   }
// });

export default app;
