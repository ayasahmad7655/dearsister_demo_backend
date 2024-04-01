import express from "express";
import SignUp from "../../controller/users/SignUp.js";
const router = express.Router();
router.post("/", SignUp);
export default router;
