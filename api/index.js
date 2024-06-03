const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const bodyParser = require('body-parser');

//
const User = require('./models/userModel');
const Message = require('./models/messageModel');

const app = express();
const port = 8005;

// Define a static secret key (move this to an environment variable in production)
const SECRET_KEY = '123456789';

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());
// app.use(express.json());
// app.use(express);
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

// Register User
app.post('/register', async (req, res) => {
  try {
    const {name, email, password, image} = req.body;
    console.log(name, email, password, image, 33);
    const newUser = new User({name, email, password, image});
    await newUser.save();
    res.status(200).json({message: 'User Registered Successfully !!!'});
  } catch (error) {
    console.log('Error creating a user');
    res.status(500).json({message: 'Error registering the user'});
  }
});

// Login User
app.post('/login', async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if (!user) {
      return res.status(401).json({message: 'Invalid Password'});
    }

    if (user.password !== password) {
      return res.status(401).json({message: 'Invalid Password'});
    }

    const token = jwt.sign({userId: user._id}, SECRET_KEY, {expiresIn: '1h'});
    res.status(200).json({token});
  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Error logging in the user'});
  }
});

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to react Native Chat Application Server. ',
  });
});

app.listen(port, () => {
  console.log(`React Native server is running on port: ${port}`);
});
