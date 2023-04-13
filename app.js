require('dotenv').config();
const express = require('express')
const app = express();
const connectDB = require("./dataBase/connect")

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products")

app.get("/", (req, res) => {
    res.send("Hello World! This app is running on docker");
})

app.use("/api/products",products_routes)

const start = async (req, res) => {
    try{
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`Yes I am connected on port ${PORT}`);
        });
    }catch(error){
        console.log(error);
    }
}
start();