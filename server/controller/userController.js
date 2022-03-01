const userModel = require("../models/userModel");
const expressAsync = require("express-async-handler");

const registerUser = expressAsync(async (req, res) => {
  const { name, email, password } = req.body;

  const existsUser = await userModel.findOne({ email });

  if (existsUser) {
    throw new Error("Exist user already ");
  }

  const user = await userModel.create({ name, email, password });

  res.status(200).json(user);
});

const LoginUser = expressAsync(async (req, res) => {
  const { email, password } = req.body;

  const existsUser = await userModel.findOne({ email });

  res.status(200).json(existsUser);
});

const getUsers = expressAsync(async (req, res) => {
  res.status(200).json({ message: "GET" });
});

module.exports = { registerUser, LoginUser, getUsers };
