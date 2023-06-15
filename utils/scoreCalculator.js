async function calculateScore(testId, questionResponses) {
  const test = await Test.findOne({ test_id: testId });

  const totalQuestions = test.questions.length;

  let score = 0;
  let correctAnswers = 0;

  for (let i = 0; i < totalQuestions; i++) {
    const question = test.questions[i];
    const userResponse = questionResponses[i];

    const isCorrect = userResponse.every((response) =>
      question.choices.filter(choice => choice.isCorrect).map(choice => choice.text).includes(response)
    );

    if (isCorrect) {
      score++;
      correctAnswers++;
    }
  }

  const percentageScore = (score / totalQuestions) * 100;

  return { score: percentageScore, correctAnswers };
}

module.exports = calculateScore;
