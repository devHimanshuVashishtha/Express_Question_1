const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if ((!username || !password))
    return res.status(500).json({ message: "Please Enter all the field" });
try{
  const checkUserName = await User.findOne({ username });
  if (!checkUserName)
    return res.status(500).json({ message: "No username Found Please register" });
  const checkPassword = await bcrypt.compare(password,checkUserName.password)
  if(!checkPassword)
    return res.status(500).json({message:"Invalid Password"})
  return res.status(200).json({Access_Token:checkUserName._id})
}catch(err){
    console.error(err)
    return res.status(500).json({message:'Server Error',error:err.message})
}
});

module.exports = router;