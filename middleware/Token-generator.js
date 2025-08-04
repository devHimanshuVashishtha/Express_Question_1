const jwt = require("jsonwebtoken");
const secret_key = process.env.JWTSECRETKEY;

exports.tokenGenerator = (payload) => {
  return jwt.sign(payload, secret_key, { expiresIn: "1h" });
};
exports.resetTokenGenerate = (payload) => {
  return jwt.sign(payload, secret_key, { expiresIn: "10m" });
};
