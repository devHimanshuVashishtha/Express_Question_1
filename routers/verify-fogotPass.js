const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const key = process.env.JWTSECRETKEY;

router.post("/verify-forgot-password/:token1", async (req, res) => {
  const token = req.params.token1;
  const { newPassword } = req.body;
  const hashedPassword = await bcrypt.hash(newPassword, 10);
  const decode = jwt.verify(token, key);
  const user = await User.findById(decode.username);
  const tokenIat = decode.iat;
  const dbIssued = Math.floor(new Date(user.tokenIssuedAT).getTime() / 1000);
  if (tokenIat < dbIssued) {
    return res.status(400).json({
      message: "Token already used or expired. Please request a new one.",
    });
  }
  user.password = hashedPassword;
  user.tokenIssuedAT = new Date();
  user.save();
  return res.json({ message: "Password Updated", user: user });
});

module.exports = router;
