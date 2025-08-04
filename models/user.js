const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, "Please enter valid Email format"],
  },
  firstname: {
    type: String,
    required: true,
    minlength: 3,
  },
  lastname: {
    type: String,
    required: true,
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
  tokenIssuedAT: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.model("User", userSchema);
