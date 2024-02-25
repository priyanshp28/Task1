const mongoose= require("mongoose");
require('dotenv').config();

const mongoURI=process.env.DBURI;

const connectToMongo=()=>{
    mongoose.connect(mongoURI)
    .then(function () {
        console.log("connected to db");
      })
}

module.exports= connectToMongo;