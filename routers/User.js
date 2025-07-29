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
  const UserName = await User.findOne({ username });
  const UserEmail = await User.findOne({ email });
  if (UserName || UserEmail) {
    return res.json({ message: "User Already exit go to login page" });
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({
    username,
    email,
    firstname,
    lastname,
    password: hashedPassword,
  });
  await user.save();
  return res.json({ message: "registration Done", user });
});
