const mongoose = require('mongoose');
const Cube = require('./Cube');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false
    },
    description: {
        type: String,
        required: true,
        unique: false,
        maxlength: 60
    },
    imageUrl: {
        type: String,
        required: true,
        unique: false,
        validate: /^http|https/
    },

    cubes: [{
        type: mongoose.Types.ObjectId,
        ref: 'Cube'
    }]
});
module.exports = new mongoose.model('Accessory', accessorySchema);