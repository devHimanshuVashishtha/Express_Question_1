const User = require("../models/user");
const express = require("express");
const router = express.Router();
const { resetTokenGenerate } = require("../middleware/Token-generator");
const jwt = require("jsonwebtoken");

router.post("/forgot-password", async (req, res) => {
  const { username, email } = req.body;
  if (!username && !email)
    return res.json({ message: "provide full details " });
  const findUser = await User.findOne({ username, email });
  if (!findUser)
    return res.json({ message: "User not present please register" });
  const token = resetTokenGenerate({
    username: findUser._id,
    email: findUser.email,
  });
  const decode = jwt.decode(token);
  findUser.tokenIssuedAT = new Date(decode.iat * 1000);
  await findUser.save();
  return res.json({
    message: "profile Verify and token generated",
    token: token,
  });
});

module.exports = router;
