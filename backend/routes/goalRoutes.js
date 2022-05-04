const express = require("express");
const router = express.Router();
const { getGoals, postGoal, updateGoal, deleteGoal } = require("../controllers/goalController");
const { Protect } = require("../middleware/authMiddleware");

router.route("/").get(Protect, getGoals).post(Protect, postGoal);
router.route("/:id").put(Protect, updateGoal).delete(Protect, deleteGoal);

module.exports = router;
