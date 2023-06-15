require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const welcomeRouter = require('./routes/welcome');
const signupRouter = require('./routes/signup');
const loginRouter = require('./routes/login');
const editPhoneNumberRouter = require('./routes/editPhoneNumber');
const submitTestRouter = require('./routes/submitTest');

const app = express();

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json());

app.use('/api/welcome', welcomeRouter);
app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);
app.use('/api/edit/phonenumber', editPhoneNumberRouter);
app.use('/submit-test', submitTestRouter);


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;