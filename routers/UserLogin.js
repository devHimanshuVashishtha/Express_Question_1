const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if ((!username || !password))
    return res.json({ message: "Please Enter all the field" });
  const checkUserName = await User.findOne({ username });
  if (!checkUserName)
    return res.json({ message: "No username Found Please register" });
  const checkPassword = await bcrypt.compare(password,checkUserName.password)
  if(!checkPassword)
    return res.json({message:"Invalid Password"})
  return res.json({YourID:checkUserName._id})
});

module.exports = router;