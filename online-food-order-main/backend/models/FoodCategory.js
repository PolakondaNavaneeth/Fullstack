const mongoose = require("mongoose");
const { Schema} = mongoose;
const FoodCategory = new Schema({
    CategoryName: {
        type: String,
        required: true
    }
})
module.exports=mongoose.model("FoodCategory",FoodCategory)