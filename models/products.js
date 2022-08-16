const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: false},
    quantity: {type: Number, required: true},
    unitWeight: {type: Number, required: true},
    unitType: {type: String, required: true}
});

module.exports = mongoose.model('products', productSchema);