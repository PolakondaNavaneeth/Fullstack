const mongoose = require("mongoose");
const mongoURI='mongodb+srv://Kaeithemmanuel:Kaeith2004@cluster0.14wxevw.mongodb.net/ekefoods?retryWrites=true&w=majority&appName=Cluster0'
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

module.exports = mongoDB;
