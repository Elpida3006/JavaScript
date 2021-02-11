const Accessory = require('../models/Accessory');



function listAccessories() {
    return Accessory.find().lean();
}

function listDifferentAccessories(ids) {
    return Accessory.find({ _id: { $nin: ids } }).lean();
}

function postCreateAccessory(data, _id) {
    console.log(data);

    // let accessory = new Accessory(data );

    // return accessory.save();
    return Accessory.create({...data, creatorId: _id })

}

function getId(id) {

    return Accessory.findById(id).lean()
        // .populate('cubes')

}

function postEditAccessory(id, data) {
    return Accessory.updateOne(id, data);
}

function postDeleteAccessory(id) {
    return Accessory.deleteOne({ _id: id })
}

module.exports = {

    postCreateAccessory,
    listAccessories,
    listDifferentAccessories,
    getId,
    postEditAccessory,
    postDeleteAccessory

}