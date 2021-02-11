const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
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
    difficultyLevel: {
        type: Number,
        required: true,
        minlength: 1,
        maxlength: 7
    },
    accessories: [{
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }],
    creatorId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});
module.exports = mongoose.model('Cube', cubeSchema);