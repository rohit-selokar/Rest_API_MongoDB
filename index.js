const express = require("express")
const app = express();
const port = 3000;

require('./db/connection');
require('./data');

const productRouter = require("./routes/productRouter");

// app.use(express.json());
app.use(productRouter);

app.listen(port,(req,res)=>{
    console.log(`server is running at port ${port}`);
})