const express = require("express");
const User = require("../models/user");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  const { username, email, firstname, lastname, password, confirmPassword } =
    req.body;
  if ((!username, !email, !firstname, !lastname, !password, !confirmPassword)) {
    return res.json({
      message: "Please add all the Fields",
    });
  }
  if (password !== confirmPassword) {
    return res.json({ message: "Password does not match" });
  }

  const user = new User({
    username,
    email,
    firstname,
    lastname,
    password,
  });
  await user.save();
  return res.json({ message: "registration Done", user });
});
