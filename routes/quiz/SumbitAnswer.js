import express from "express";
const router = express.Router();
import SumbitAnswer from "../../controller/quiz/SumbitAnswer.js";
router.put("/", SumbitAnswer);

// router.get("/lo", (req, res) => {
//   try {
//     res.status(200).send("No Error Shown");
//   } catch (e) {
//     res.status(404).send("Error Shown ");
//   }
// });

export default router;
