const axios = require("axios");
const express = require("express");
const router = express.Router();

router.get("/fetch-axios/nav/:scheme_code", async (req, res) => {
  const code = req.params.scheme_code;
  const url = `https://nav-indian-mutual-fund.p.rapidapi.com/nav?scheme_code=${code}`;
  try {
    const response = await axios.get(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.RAPID_KEY,
        "X-RapidAPI-Host": "nav-indian-mutual-fund.p.rapidapi.com",
      },
    });
    const data = response.data;
    res.json({ message: "done", NAV: data.data.NAV });
  } catch (err) {
    res.json({ message: "Faild to load data", Error: err.message });
  }
});

module.exports = router;
