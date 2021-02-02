const Accessory = require('../models/Accessory');

function listAccessories() {
    return Accessory.find().lean();
}

function postCreateAccessory(data) {
    console.log(data);

    let accessory = new Accessory(data);

    return accessory.save();

}


module.exports = {

    postCreateAccessory,
    listAccessories
}