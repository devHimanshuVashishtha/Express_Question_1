const express = require("express");
const User = require("../models/user");

async function verification(req, res, next) {
  const token = req.headers["access_token"];
  if (!token) return res.json({ message: "Please Provide token" });
  const user = await findOne(token);
  if (!user) return res.json({ message: "Wrong Token Provided" });
  req.user = user;
  next();
}

module.exports = verification;
