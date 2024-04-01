import express from "express";
import User from "../../model/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();
// const cookieOptions = {
//   httpOnly: true, // Prevent JavaScript access
//   secure: true, // Use only over HTTPS
//   maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days in milliseconds
// };
router.post("/", async (req, res) => {
  try {
    // res.cookie("refreshToken", refreshToken, {
    //   httpOnly: true,
    //   secure: true, // Use only over HTTPS
    // });

    // console.log(req.body);
    const { email, password } = await req.body;
    // console.log(email);
    if (!email || !password) {
      res.status(200).json({ Message: "Please Provide all Values" });
      return;
    }
    const user = await User.findOne({ email });
    // console.log(user);
    if (!user) {
      res.status(200).json({ Message: "Email Not Found" });
      return;
    }
    const token = jwt.sign(
      {
        user_email: user.email,
      },
      "aadaa"
    );
    // console.log("Token", token);
    // res.cookie("jwt", token);
    //   verifyToken; // console.log(res);
    res.status(200).json({ message: "Logged in successfully", token });
    return;
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
