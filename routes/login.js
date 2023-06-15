const express = require('express');
const axios = require('axios');
const router = express.Router();
const User = require('../models/User');

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, password }).exec();

    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      const catboyResponse = await axios.get('https://api.catboys.com/catboy');
      const message = catboyResponse.data.response;

      res.status(200).json({
        success: true,
        message: message,
      });
    }
  } catch (err) {
    console.error('Error logging in:', err);
    res.status(500).json({ error: 'An error occurred while logging in' });
  }
});

module.exports = router;
