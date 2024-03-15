const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Mongodb Connected");
})
.catch((err)=>{
    console.log("ERRPR",err);
})