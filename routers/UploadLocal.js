const express = require("express");
const upload = require("../utils/localUpload");
const router = express.Router();

router.post("/profile-image", upload.single("image"), (req, res) => {
  if (!req.file) return res.json({ message: "no File Upload" });
  const fileUrl = `/uploads${req.file.filename}`;
  res.json({ message: "image uploaded ", fileUrl });
});


module.exports = router