const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    pass: {type: String, required: true},
    rol: {type: String, required: true},
}, {versionKey: false});

module.exports = mongoose.model('user', userSchema);
    