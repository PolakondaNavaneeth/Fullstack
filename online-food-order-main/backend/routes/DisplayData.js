const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const FoodItem = require("../models/FoodItem");
router.post('/foodData', async (req, res) => {
    try {
        const foodData = await FoodItem.find();
        res.json(foodData);
    } catch (err) {
        res.json({ message: err });
    }   
})
module.exports=router
