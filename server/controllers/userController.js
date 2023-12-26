const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");
const status = require("../utils/status");

// @desc Creates a new user
// @route POST /api/user/signup
// @access public
const signupUser = asyncHandler(async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  if (!name || !email || !password || !confirmPassword) {
    res.status(status.BAD_REQUEST.statusCode);
    throw new Error("All fields are mandatory!");
  }
  if (password !== confirmPassword) {
    res.status(status.BAD_REQUEST.statusCode);
    throw new Error("Password does not match!");
  }

  const isUserAlreadyRegistered = await User.findOne({ email });

  if (isUserAlreadyRegistered) {
    res.status(status.BAD_REQUEST.statusCode);
    throw new Error("User already registered!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = User.create({
    name,
    email,
    password: hashedPassword,
  });
  if (user) {
    res.status(status.CREATED.statusCode).json({ message: "User created" });
  } else {
    res.status(status.BAD_REQUEST.statusCode);
    throw new Error("User data is invalid.");
  }
});

// @desc Login a user
// @route POST /api/user/login
// @access public
const loginUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(status.BAD_REQUEST.statusCode);
    throw new Error("All fields are mandatory!");
  }

  const user = await User.findOne({ email });
  if (!user) {
    res.status(status.BAD_REQUEST.statusCode);
    throw new Error("User is not registered");
  }

  // Compare user password with hashed password saved in the database
  const compareWithHashedPassword = await bcrypt.compare(
    password,
    user.password
  );
  if (user && !compareWithHashedPassword) {
    res.status(status.BAD_REQUEST.statusCode);
    throw new Error("Password does not match.");
  }

  if (user && compareWithHashedPassword) {
    const accessToken = jwt.sign(
      {
        user: {
          email: user.email,
          id: user._id,
        },
      },
      process.env.JWT_ACCESS_TOKEN_SECRET_KEY,
      { expiresIn: "30m" }
    );
    res.status(status.OK.statusCode).json({ accessToken });
  }
});

// @desc Updates user information
// @route PUT /api/user/:id
// @access private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(status.NOT_FOUND.statusCode);
    throw new Error("User not found.");
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(status.OK.statusCode).json(updatedUser);
});

// @desc Deletes user
// @route DELETE /api/user/:id
// @access private
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(status.NOT_FOUND.statusCode);
    throw new Error("User not found.");
  }
  await User.findByIdAndDelete(req.params.id);
  res.status(status.OK.statusCode).json({ message: "User has been deleted." });
});

// @desc Current user information
// @route POST /api/user/current
// @access private
const currentUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(status.NOT_FOUND.statusCode);
    throw new Error("User not found.");
  }
  res.status(status.ACCEPTED.statusCode).json(user);
});

module.exports = { signupUser, loginUser, updateUser, deleteUser, currentUser };
