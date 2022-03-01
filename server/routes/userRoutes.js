const express = require("express");
const {
  getUsers,
  registerUser,
  LoginUser,
} = require("../controller/userController");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", LoginUser);
router.get("/", getUsers);

module.exports = router;
