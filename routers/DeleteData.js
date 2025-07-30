const express = require("express");
const User = require("../models/user");
const verification = require("../middleware/verifyToken");
const router = express.Router();

router.put("/delete", verification, async (req, res) => {
  const userid = req.user.id;
  const deleteUser = await User.findByIdAndDelete(userid);
  res.json({ message: "successfully deleted",deleteUser});
});

module.exports = router;
