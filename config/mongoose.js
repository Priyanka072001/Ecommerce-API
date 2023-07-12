const mongoose = require('mongoose');

//Mongoose database connection
mongoose.connect('mongodb+srv://Priyanka:cq2cpDzjoG5TqLl7@cluster0.qpsn14h.mongodb.net/'); //db url

const db = mongoose.connection;
//if error
db.on('error', console.error.bind(console, 'error connecting to your database'));
// if connection is successfull
db.once('open', function() {
    console.log('Successfully connected to the database.');
});