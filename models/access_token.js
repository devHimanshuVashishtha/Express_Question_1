const mongoose = require("mongoose");

const tokenSchema = mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user", require: true },
  access_token: { type: String, require: true },
  expiry: { type: Date, require: true },
});

module.exports = mongoose.model("AccessToken", tokenSchema);
