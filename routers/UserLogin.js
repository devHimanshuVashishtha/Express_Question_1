const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const key = process.env.JWTSECRETKEY;
// const AccessToken = require("../models/access_token");
// const { v4: uuid } = require("uuid");
// const access_token = require("../models/access_token");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(500).json({ message: "Please Enter all the field" });
  try {
    const checkUserName = await User.findOne({ username });
    if (!checkUserName)
      return res
        .status(500)
        .json({ message: "No username Found Please register" });
    const checkPassword = await bcrypt.compare(
      password,
      checkUserName.password
    );
    if (!checkPassword)
      return res.status(500).json({ message: "Invalid Password" });
    // const accesstoken = uuid();
    // const expiry = new Date(Date.now() + 1000 * 60 * 30);

    const payload = {
      id: checkUserName.id,
      username: checkUserName.username,
    };
    const token = jwt.sign(payload, key, { expiresIn: "1d" });


    // await AccessToken.create({
    //   user_id: checkUserName.id,
    //   access_token: accesstoken,
    //   expiry,
    // });
    // req.session.access_token = accesstoken;
    // return res.status(200).json({
    //   message: "Login Successfully",
    //   access_token: accesstoken,
    //   expiry_at: expiry,
    // });

    return res.json({message:"Login Successfully",token:token})
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Server Error", error: err.message });
  }
});

module.exports = router;
