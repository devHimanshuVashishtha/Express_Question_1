const AccessToken = require("../models/access_token");
const User = require("../models/user");

async function verification(req, res, next) {
  const token = req.headers["access_token"];
  if (!token) return res.json({ message: "Please Provide token" });
  const Access_Token = await AccessToken.findOne({ access_token: token });
  if (!Access_Token) return res.json({ message: "Wrong Token Provided" });
  if (Access_Token.expiry < new Date()) return res.json({ message: "token Expired" });
  const user = await User.findById(Access_Token.user_id);
  if (!user) return res.json({ message: "No user Found" });
  req.user = user;
  next();
}

module.exports = verification;
