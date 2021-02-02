const Accessory = require('../models/Accessory');
const Cube = require('../models/Cube');


function listAccessories() {
    return Accessory.find().lean();
}

function postCreateAccessory(data) {
    console.log(data);

    let accessory = new Accessory(data);

    return accessory.save();

}

function getId(id) {

    return Accessory.findById(id).lean()
        // .populate('accessories')

}
module.exports = {

    postCreateAccessory,
    listAccessories,
    getId
}