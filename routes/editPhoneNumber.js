const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.put('/', async (req, res) => {
  const { phone_number } = req.body;
  const authToken = req.headers.authorization;

  try {
    const user = await User.findOneAndUpdate({ authToken }, { phone_number }, { new: true }).exec();

    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.status(200).json({
        success: true,
        message: 'Phone number changed/added successfully',
      });
    }
  } catch (err) {
    console.error('Error updating phone number:', err);
    res.status(500).json({ error: 'An error occurred while updating phone number' });
  }
});

module.exports = router;
