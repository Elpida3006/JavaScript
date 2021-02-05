const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory')

function filterProducts(query) {
    const { from, search, to } = query;
    let newCube = {};


    if (query.search) {
        newCube.name = new RegExp(search, 'i');
    }

    if (query.from) {
        newCube.difficultyLevel = { $gte: +from };
    }

    if (query.to) {
        newCube.difficultyLevel = newCube.difficultyLevel || {};
        newCube.difficultyLevel.$lte = +to;
    }
    return Cube.find(newCube)
        // .populate('accessories')
        .lean()
}





function getCube(id) {

    return Cube.findById(id)
        .lean()

}

function getIdAccessories(id) {
    return Cube.findById(id)
        .populate('accessories')
        .lean();
}

async function postAttachAccessory(cubeId, accessoryId) {
    let product = await Cube.findById(cubeId)
    let accessory = await Accessory.findById(accessoryId)

    product.accessories.push(accessory);
    return product.save();

}

function postEditCube(id, data) {

    return Cube.updateOne(id, data);

}

function postDeleteCube(id) {

    return Cube.deleteOne({ _id: id })

}

function postCreateCube(data) {
    // let cube = new Cube(data);
    // return cube.save();
    return Cube.create(data)



}

module.exports = {
    filterProducts,
    postCreateCube,
    getCube,
    postAttachAccessory,
    getIdAccessories,
    postEditCube,
    postDeleteCube
}