    const express = require("express");
    const Address = require("../models/addressModel");
    const verification = require("../middleware/verifyToken");
    const router = express.Router();
    const User = require('../models/user')

    router.post("/address", verification, async (req, res) => {
    try {
        const { address, city, state, pincode, phone_no } = req.body;
        if (!address || !city || !state || !pincode || !phone_no)
        return res.json({ message: "Provide all the field" });
        const newAddres = new Address({
        user_id: req.user._id,
        address,
        city,
        state,
        pincode,
        phone_no,
        });

        const savedAddress = await newAddres.save();
        const user = await User.findById(req.user._id);
        user.addresses.push(savedAddress._id);
        await user.save();

        return res.json({ message: "address added successfully", data: newAddres });
    } catch (err) {
        return res.json({ message: "Server Error", err: err.message });
    }
    });

    module.exports = router;
