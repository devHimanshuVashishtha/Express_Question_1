const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get("/list/:page", async (req, res) => {
  const page = parseInt(req.params.page);
  if (page <= 0)
    return res
      .status(400)
      .json({ message: "Please provide value more than 0" });
  const limit = 10;
  const skip = (page - 1) * limit;
  const users = await User.find().skip(skip).limit(limit);
  res.json({ message: "here is the data", user: users });
});

module.exports = router;
