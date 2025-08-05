
const User = require("../models/user");
const jwt = require("jsonwebtoken");

async function verification(req, res, next) {

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
