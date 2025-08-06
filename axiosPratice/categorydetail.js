const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.get("/fetch/flipkart/mobile", async (req, res) => {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=194");
    const data = await response.json();
    const productdetails = data.products;
    const smartphones = productdetails.filter(
      (product) => product.category === "smartphones"
    );
    res.json({
      category: "smartphones",
      product: smartphones,
    });
  } catch (err) {
    res.json({ message: "faild to get the response", Error: err.message });
  }
});

module.exports = router;
