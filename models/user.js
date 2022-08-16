const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {type: String, required: false},
    email: {type: String, required: true},
    pass: {type: String, required: true},
    rol: {type: String, required: false},
}, {versionKey: false});

module.exports = mongoose.model('user', userSchema);
    