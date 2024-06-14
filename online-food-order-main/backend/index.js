const express = require("express");
const app = express();
const port =5000;
const mongoDB=require('./db');
mongoDB();
app.get("/", (req, res) => {
    res.send("Hello World!");
})
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})
app.use(express.json());
app.use('/api',require('./routes/CreateUser'));
app.use('/api',require('./routes/DisplayData'));
app.use('/api',require('./routes/CategoryData'));
app.use('/api',require('./routes/Orderdata'));

app.listen(port, () => {
    console.log(`Backend server is running on port ${port}`);
})