const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');

//
const User = require('./models/userModel');
const Message = require('./models/messageModel');

const app = express();
const port = 8005;

app.use(cors());
app.use(express.json());
// app.use(express.url)

mongoose
  .connect(
    'mongodb+srv://react-native-user01:0tAMg2ts7dWPO0nB@cluster0.cgk6hcz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  )
  .then(() => {
    console.log('Connected to mongodb successfully');
  })
  .catch(error => {
    console.log('Mongodb not connected', error);
  });

app.listen(port, () => {
  console.log(`React Native server is running on port: ${port}`);
});
