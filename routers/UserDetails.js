const express = require("express");
const User = require("../models/user");
const verification = require("../middleware/verifyToken");
const router = express.Router();

router.get("/get/:id", verification, async (req, res) => {
    const userId = req.params.id;
    if (!userId) return res.json({ message: "ID is not provided" });
    // console.log(userId);
    const user = await User.findById(userId).populate("addresses");
    // console.log(user);
    if (!user) return res.json({ message: "user not found" });
    return res.json({ message: "Found", user });

//   return res.json({ message: "Token Verify", user: req.user });
});

module.exports = router;
