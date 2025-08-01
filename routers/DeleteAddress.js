const User = require("../models/user");
const Address = require("../models/addressModel");
const verification = require("../middleware/verifyToken");
const express = require("express");
const router = express.Router();

router.delete("/address", verification, async (req, res) => {
  const userID = req.user.id;
  const { addressIds } = req.body;
  if (!addressIds || !Array.isArray(addressIds) || addressIds.length === 0)
    return res.json({ message: "Provide value more than 0" });
  await Address.deleteMany({ _id: { $in: addressIds }, user: userID });
  res.json({ message: "Address deleted" });
  await User.findByIdAndUpdate(userID, {
    $pull: { addresses: { $in: addressIds } },
  });
});

module.exports = router;
