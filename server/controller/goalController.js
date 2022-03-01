const goalsModal = require("../models/goalsModal");
const asyncHandler = require("express-async-handler");

const getGoals = asyncHandler(async (req, res) => {
  const goals = await goalsModal.find();

  res.status(200).json(goals);
});

const postGoal = asyncHandler(async (req, res) => {
  const { text } = req.body;

  const goal = await goalsModal.create({ text });

  res.status(200).json(goal);
});

const updateGoal = asyncHandler(async (req, res) => {
  const goalId = await goalsModal.findById(req.params.id);

  const updateGoal = await goalsModal.findByIdAndUpdate(
    goalId,
    { text: req.body.text },
    { new: true }
  );

  res.status(200).json(updateGoal);
});

const deleteGoal = asyncHandler(async (req, res) => {
  const goalId = await goalsModal.findById(req.params.id);

  await goalsModal.remove(goalId);

  res.status(200).json({ _id: req.params.id });
});

module.exports = { getGoals, postGoal, updateGoal, deleteGoal };
