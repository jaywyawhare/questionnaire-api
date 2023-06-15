const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', (req, res) => {
  const { name, email, password, phone_number } = req.body;

  const user = new User({
    name,
    email,
    password,
    phone_number,
  });

  user.save()
    .then(() => {
      res.status(200).json({
        success: true,
        message: 'Signed up successfully',
      });
    })
    .catch((err) => {
      console.error('Error signing up:', err);
      res.status(500).json({ error: 'An error occurred while signing up' });
    });
});

module.exports = router;
