const express = require("express");
const fetch = require("node-fetch"); 
const router = express.Router()

router.get("/fetch-example", async (req, res) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch data" });
    }
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router

