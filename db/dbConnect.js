const mongoose = require("mongoose")
require('dotenv').config({ path: "./config.env" });

async function dbConnect(){
    
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser: true, useUnifiedTopology: true  
    })
    .then(()=>{
        console.log("Connected to DB")
    })
    .catch((err) => {
        console.log("Error connecting")
        console.log(err)
    })
}

module.exports=dbConnect;