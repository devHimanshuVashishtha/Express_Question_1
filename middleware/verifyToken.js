// const AccessToken = require("../models/access_token");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

async function verification(req, res, next) {
  // try {
  // const token = req.headers["access_token"];
  // if (!token) {
  //   return res.status(401).json({ message: "Access token is required" });
  // }

  // const accessTokenDoc = await AccessToken.findOne({ access_token: token });
  // if (!accessTokenDoc) {
  //   return res.status(403).json({ message: "Invalid access token" });
  // }

  // if (accessTokenDoc.expiry < new Date()) {
  //   return res.status(403).json({ message: "Access token has expired" });
  // }

  // const user = await User.findById(accessTokenDoc.user_id);
  // if (!user) {
  //   return res.status(404).json({ message: "User not found" });
  // }

  // req.user = user;
  // next();

  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Access Denied. No token provided ",
    });
  }
  const token = authHeader.split(" ")[1];
  if (!token) return res.json({ message: "Access Denoed No token Provided" });
  try {
    const verifyToken = jwt.verify(token, process.env.JWTSECRETKEY);
    const user = await User.findById(verifyToken.id)
    if(!user) return res.json({message:'user not found'})
    req.user = user;
    next();
  } catch (error) {
    console.error("Verification middleware error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

module.exports = verification;
