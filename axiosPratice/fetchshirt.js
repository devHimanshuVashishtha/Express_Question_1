const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.get("/fetch/snapdeal/t-shirt", async (req, res) => {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=194");
    const data = await response.json();
    const shirt = data.products.filter(
      (product) => product.category === "mens-shirts"
    );
    res.status(200).json({
      category: "shirt",
      productsDetails: shirt,
    });
  } catch (err) {
    console.error(err);
    res.status(500).res.json({ message: "server Error", Error: err.message });
  }
});

module.exports = router;
