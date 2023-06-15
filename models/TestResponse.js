const mongoose = require('mongoose');

const testResponseSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  test_id: {
    type: String,
    required: true,
  },
  question_id: {
    type: String,
    required: true,
  },
  answers: {
    type: [String],
    required: true,
  },
});

testResponseSchema.index({ user_id: 1, test_id: 1 }, { unique: true });

module.exports = mongoose.model('TestResponse', testResponseSchema);
