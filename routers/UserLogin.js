const express = require("express");
const router = express.Router();
const { tokenGenerator } = require("../middleware/Token-generator");
const passport = require("passport");


router.post("/login", (req, res, next) => {
  console.log("Inside login route");

  passport.authenticate("local", (err, user, info) => {
    if (err) {
      console.error("Passport error:", err);
      return next(err);
    }

    if (!user) {
      console.log("User not found or wrong password");
      return res.status(401).json({ message: info.message || "Login failed" });
    }

    req.logIn(user, (err) => {
      if (err) {
        console.error("req.logIn error:", err);
        return next(err);
      }

      console.log("User logged in, generating token...");
      const token = tokenGenerator({
        id: user._id,
        username: user.username,
      });

      return res.json({ message: "Logged in successfully", token });
    });
  })(req, res, next); 

});

module.exports = router;
