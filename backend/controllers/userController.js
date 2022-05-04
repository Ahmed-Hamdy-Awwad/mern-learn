const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;
	if (!name || !email || !password) {
		res.status(400);
		throw new Error("Please enter all fields");
	}
	// Check if user exists
	const user = await User.findOne({ email });
	if (user) {
		res.status(400);
		throw new Error("User already exists");
	}
	// Hash password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);
	// Create user
	const newUser = await User.create({ name, email, password: hashedPassword });
	if (!newUser) {
		res.status(400);
		throw new Error("User could not be created");
	}
	res.status(201).json({ _id: newUser._id, name: newUser.name, email: newUser.email, token: generateToken(newUser) });
});

const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) {
		res.status(400);
		throw new Error("Please enter all fields");
	}
	// Check if user exists
	const user = await User.findOne({ email });
	if (user && (await bcrypt.compare(password, user.password))) {
		res.json({ _id: user._id, name: user.name, email: user.email, token: generateToken(user) });
	} else {
		res.status(400);
		throw new Error("Invalid credentials");
	}
});

// Generate token
const generateToken = (user) => {
	return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

const getMe = asyncHandler(async (req, res) => {
	res.status(200).json("My data");
});

module.exports = { registerUser, loginUser, getMe };
