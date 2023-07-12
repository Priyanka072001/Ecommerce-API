const express = require("express");
const port = 8080;
const bodyParser = require('body-parser');
const db = require("./config/mongoose");
const schema = require("./models/Product");
const app = express();

app.use(express.urlencoded({ extended: true }));
// body-parser middleware to handle post requests
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json());


//use express router
app.use("/", require("./routes"));

app.listen(port, function(err){
    if(err){console.log(`Error in running the server, ${err}`)};
    console.log(`Server is running on port: ${port}`);
})