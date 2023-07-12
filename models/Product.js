const mongoose = require('mongoose');
const autoIncrement=require('mongoose-sequence')(mongoose);
//Logical View of our database
const productSchema = new mongoose.Schema({  
    _id:{
        type:Number
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
});
productSchema.plugin(autoIncrement);
const Product = mongoose.model('Product', productSchema);
module.exports = Product;