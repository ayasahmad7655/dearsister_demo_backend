import Questions from "./../../model/Questions.js";

export default async function QuestionsRetrieval(req, res) {
  try {
    const title = req.params.index;
    const questions = await Questions.findOne({ title });
    // console.log(title);
    res.status(200).json(questions);
    // console.log(questions);
  } catch (e) {
    res.status(400).json(e);
  }

  // Logic to retrieve quiz data based on 'index' (replace with your implementation)
  //   const quizData = fetchQuizData(index);

  //   if (quizData) {
  //     res.json(quizData); // Send the quiz data as JSON
  //   } else {
  //     res.status(404).send("Quiz not found"); // Handle non-existent quiz
  //   }
}
