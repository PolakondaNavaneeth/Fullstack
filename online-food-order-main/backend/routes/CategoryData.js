const express = require("express");
const router = express.Router();
const mongoose = require("mongoose"); 

const FoodCategory = require("../models/FoodCategory");
router.post('/foodcategory', async (req, res) => {
    try {
        const categoryData = await FoodCategory.find();
        res.json(categoryData);
    } catch (err) {
        res.json({ message: err });
    }   
})
module.exports=router
