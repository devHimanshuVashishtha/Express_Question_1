const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
require("dotenv").config();

router.get("/fetch/nav/:scheme_code", async (req, res) => {
  try {
    const code = req.params.scheme_code;
    const url = `https://nav-indian-mutual-fund.p.rapidapi.com/nav?scheme_code=${code}`;

    const option = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_KEY,
        "X-RapidAPI-Host": "nav-indian-mutual-fund.p.rapidapi.com",
      },
    };
    const response = await fetch(url, option);
    const data = await response.json();
    const data1 = data.data.NAV;
    res.json({
      message: "done",
      NAV: data1,
    });
  } catch (err) {
    res.json({ message: "server Error", Error: err.message });
  }
});

module.exports = router;
