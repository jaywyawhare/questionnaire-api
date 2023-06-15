const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
    unique: true, 
    validate: {
      validator: validator.isEmail,
      message: 'Invalid email address',
    },
  },
  password: {
    type: String,
    required: false,
  },
  phone_number: {
    type: String,
    required: false,
  },
});

// Hash the password before saving
userSchema.pre('save', async function (next) {
  const user = this;

  if (!user.isModified('password') || !user.password) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
  } catch (error) {
    return next(error);
  }
});

// Compare password
userSchema.methods.comparePassword = function (password, callback) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return callback(err);
    }

    callback(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
