const express= require("express");
const connectToMongo= require("./db");
const dotenv= require("dotenv");

const cors= require("cors");
const bodyParser= require("body-parser");
const dataRouter = require('./routes/data');

connectToMongo();
const app= express();
app.use(cors());
app.use(bodyParser.urlencoded("extended:true"));
app.use(express.static("public"));
app.use(express.json());

app.use("/api", require("./routes/data"));

app.listen(4000, function()
{
    console.log("server is running on port 4000");
})

