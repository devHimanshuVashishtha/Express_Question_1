const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.get("/fetch/flipkart/mobile", async (req, res) => {
  const response = await fetch(
    "https://dummyjson.com/products/category/smartphones"
  );
  const data = await response.json();
  res.json({
    category: "mobile",
    product: data.products,
  });
});

module.exports = router;
