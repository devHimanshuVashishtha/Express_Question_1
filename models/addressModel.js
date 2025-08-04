const mongoose = require("mongoose");

const AddressModel = mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
  address: { type: String, require: true },
  city: { type: String, require: true },
  state: { type: String, require: true },
  pincode: { type: Number, require: true },
  phone_no: { type: Number, require: true },
});

module.exports = mongoose.model("Address", AddressModel);
