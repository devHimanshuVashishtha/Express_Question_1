const express = require("express");
const User = require("../models/user");
const verification = require("../middleware/verifyToken");
const router = express.Router();

router.get("/get", verification, (req, res) => {
    res.json({message:'Token Verify',user:req.user})
});

module.exports = router;
