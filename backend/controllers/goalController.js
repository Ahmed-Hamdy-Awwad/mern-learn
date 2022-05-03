const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
	res.status(200).json({ message: "Get goals" });
});

const postGoal = asyncHandler(async (req, res) => {
	if (!req.body.data) {
		res.status(400);
		throw new Error("No data provided");
	}
	res.status(200).json({ message: "Create goal" });
});

const updateGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Update goal ${req.params.id}` });
});

const deleteGoal = asyncHandler(async (req, res) => {
	res.status(200).json({ message: `Delete goal ${req.params.id}` });
});

module.exports = { getGoals, postGoal, updateGoal, deleteGoal };
