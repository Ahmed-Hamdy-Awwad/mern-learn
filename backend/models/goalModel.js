const mongoose = require("mongoose");

const goalSchema = new mongoose.Schema(
	{
		user: {
			ref: "User",
			required: true,
			type: mongoose.Schema.Types.ObjectId,
		},
		text: {
			type: String,
			required: [true, "Please add a text value"],
		},
	},
	{ timestamps: true }
);
module.exports = mongoose.model("Goal", goalSchema);
