import mongoose from "mongoose";
const { Schema } = mongoose;

const QuestionSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  questions: [
    {
      question: {
        type: String,
        required: true,
      },
      options: [
        {
          type: String,
          required: true,
        },
      ],
      correctAnswer: {
        // Index of the correct answer in options array
        type: Number,
        required: true,
      },
    },
  ],
  // ... other quiz details (e.g., difficulty, time limit)
});
let Question = mongoose.model("Question", QuestionSchema);
export default Question;
