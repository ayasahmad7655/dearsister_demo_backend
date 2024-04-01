import express from "express";
const router = express.Router();
import DriveUpload from "../../controller/quiz/DriveUpload.js";
router.post("/", DriveUpload);

export default router;
