const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get("/get/:token", async (req, res) => {
  const token = req.params.token;
  if (!token) return res.json({ message: "No token Found" });
  const user = await User.findById(token);
  if (!user) return res.json({ message: "Invalid Token Provided" });
  return res.json({ user: user });
});

module.exports = router;
