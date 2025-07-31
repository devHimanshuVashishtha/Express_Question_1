const express = require("express");
const User = require("../models/user");
const verification = require("../middleware/verifyToken");
const router = express.Router();

router.put("/delete", verification, async (req, res) => {
  const userid = req.user.id;
  await User.findByIdAndDelete(userid);
  req.session.destroy();
  res.json({ message: "successfully deleted"});
});

module.exports = router;
