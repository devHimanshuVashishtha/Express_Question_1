const express = require("express");
const User = require("../models/user");
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  const { username, email, firstname, lastname, password, confirmPassword } =
    req.body;
  if (
    !username ||
    !email ||
    !firstname ||
    !lastname ||
    !password ||
    !confirmPassword
  ) {
    return res.status(500).json({
      message: "Please add all the Fields",
    });
  }
  if (password !== confirmPassword) {
    return res.status(500).json({ message: "Password does not match" });
  }
  try {
    const UserName = await User.findOne({ username });
    const UserEmail = await User.findOne({ email });
    if (UserName && UserEmail) {
      return res
        .status(500)
        .json({ message: "User Already exit go to login page" });
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
    return res.status(200).json({ message: "registration Done", user: user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "server Error", error: err.message });
  }
});

module.exports = router;
