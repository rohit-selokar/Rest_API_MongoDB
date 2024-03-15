require("dotenv").config();
const item = require("./models/productSchema");
const productJson = require("./data.json");
const mongoose = require("mongoose");

const start = async () =>{
    try{
        mongoose.connect(process.env.MONGODB_URL);
        await item.deleteMany();
        await item.create(productJson);
        console.log("successfully added data into the database");
    }
    catch(err){
        console.log(err);
    }
};

start();