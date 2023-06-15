const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  test_id: {
    type: String,
    required: true,
    unique: true, // Enforce uniqueness of test_id
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  questions: [
    {
      question_id: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
      choices: [
        {
          choice_id: {
            type: String,
            required: true,
          },
          text: {
            type: String,
            required: true,
          },
          isCorrect: {
            type: [Boolean],
            default: [],
          },
        },
      ],
    },
  ],
});

module.exports = mongoose.model('Test', testSchema);
