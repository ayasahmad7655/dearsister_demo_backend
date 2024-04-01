import mongoose from "mongoose";

const quizLiveSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  attemptedQuizzes: {
    type: [
      {
        type: String,
        ref: "Quiz",
        link: { type: String, default: "" },
      },
    ],

    default: [],
  },
  notAttemptedQuizzes: {
    type: [
      {
        type: String,
        ref: "Quiz",
      },
    ],
    default: [],
  },
  salt: {
    type: Buffer,
  },
});

// Ensure "Quiz" model is defined before using `ref`
// const Quiz = require("./Quiz"); // Assuming Quiz model is in a './Quiz' file

const Quizes = mongoose.model("Quizesdata", quizLiveSchema);

export default Quizes;
