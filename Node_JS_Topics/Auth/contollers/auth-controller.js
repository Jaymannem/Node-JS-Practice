require("dotenv").config()
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register controller
const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      res.status(400).json({
        success: false,
        message: "User is already exist",
      });
    }

    // hash user password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // create a new user
    const newUser = new User({
      username,
      email,
      password: hashPassword,
      role: role || "user",
    });

    await newUser.save();

    if (newUser) {
      res.status(201).json({
        success: true,
        message: "User registered successfully!",
      });
    } else {
      res.statu(400).json({
        success: false,
        message: "Unable to register the user, Please try again!",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

// login controller
const loginUser = async (req, res) => {
  try {
    // extract username and password from req.body
    const { username, password } = req.body;

    // find the user is registered or not
    const user = await User.findOne({ username });

    // checking passwords matched or not
    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      res.status(400).json({
        success: false,
        message: "Invalid Password",
      });
    }

    // generate token using jwt
    const accessToken = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        role: user.role,
      },
      process.env.JSON_SECRET_KEY,
      {
        expiresIn: "30m",
      }
    );

    res.status(200).json({
      success: true, 
      message: "Logged in successful", 
      accessToken
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
};

module.exports = { registerUser, loginUser };
