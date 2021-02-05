const mongoose = require('mongoose');
const Cube = require('./Cube');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true,
        maxlength: 60,
        minlength: 3
    },

});
module.exports = new mongoose.model('User', userSchema);