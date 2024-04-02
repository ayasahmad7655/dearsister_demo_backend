import express from "express";
const router = express.Router();
import DashBoard from "../../controller/users/Dashboard.js";
router.post("/", DashBoard);

// router.get("/lo", (req, res) => {
//   try {
//     res.status(200).send("No Error Shown");
//   } catch (e) {
//     res.status(404).send("Error Shown ");
//   }
// });

export default router;
// lql6Ls5BmJUAfwXI
