const cloudUpload = require("../middleware/multerForClud");
const cloudinary = require("../utils/cloudConfig");
const express = require("express");
const router = express.Router();

router.post("/image-cloud", cloudUpload.single("image"), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: "File not found" });
    const result = await cloudinary.uploader.upload(req.file.path);
    res
      .status(200)
      .json({ imgUrl: result.secure_url, public_id: result.public_id });
  } catch (error) {
    console.error("Upload failed:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});

module.exports = router;
