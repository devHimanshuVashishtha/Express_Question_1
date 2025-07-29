const express = require("express");
const User = require("../models/user");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  const { username, email, firstname, lastname, password, confirmPassword } =
    req.body;
  const user = new User({
    username,
    email,
    firstname,
    lastname,
    password,
  });
  await user.save();
  return res.json({message:'registration Done',user})
});
