import express from "express";
const router = express.Router();
import Login from "../../controller/users/Login.js";
router.post("/", Login);

// router.get("/lo", (req, res) => {
//   try {
//     res.status(200).send("No Error Shown");
//   } catch (e) {
//     res.status(404).send("Error Shown ");
//   }
// });

export default router;
