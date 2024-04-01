import mongoose from "mongoose";
const { Schema } = mongoose;

const reportSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    quizPoints: { type: Number, default: 0 }, // Added quizPoints
    highestScore: { type: Number, default: 0 }, // Added highestScore
    correctAnswers: { type: Number, default: 0 },
    achievements: { type: Array, default: [] },
    salt: Buffer,
    resetPasswordToken: { type: String, default: "" },
  },
  { timestamps: true }
);
let Report = mongoose.model("Report", reportSchema);
export default Report;
