const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

router.get("/fetch/flipkart/mobile", async (req, res) => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  const productdetails = data.products;
  const groceries = productdetails.filter(
    (product) => product.category === "groceries"
  );
  res.json({
    category: "groceries",
    product: groceries,
  });
});

module.exports = router;
