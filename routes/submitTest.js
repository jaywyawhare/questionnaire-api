const express = require('express');
const TestResponse = require('../models/TestResponse');
const Test = require('../models/Test');

const router = express.Router();

router.post('/submit-test', async (req, res) => {
  try {
    const { test_id, answers } = req.body;
    const user_id = req.session.user_id;

    const test = await Test.findOne({ test_id });
    if (!test) {
      return res.status(404).json({ error: 'Test not found' });
    }

    const questionIds = test.questions.map((question) => question.question_id);
    const invalidQuestionIds = answers.filter((answer) => !questionIds.includes(answer.question_id));
    if (invalidQuestionIds.length > 0) {
      return res.status(400).json({ error: 'Invalid question IDs in answers' });
    }

    const testResponse = new TestResponse({
      user_id,
      test_id,
      answers,
    });

    await testResponse.save();

    res.json({ message: 'Test response submitted successfully' });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ error: 'You have already submitted a response for this test' });
    }
    console.error('Error submitting test response:', error);
    res.status(500).json({ error: 'An error occurred while submitting the test response' });
  }
});

module.exports = router;
