const Cube = require('../models/Cube');


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
    return Cube.find(newCube).lean()
        // .populate('accessories')

}

function postCreateCube(data) {
    let cube = new Cube(data);

    return cube.save();
}

function getId(id) {

    return Cube.findById(id).lean()
        // .populate('accessories')

}

function postAttachAccessory(data) {


}

module.exports = {
    filterProducts,
    postCreateCube,
    getId,
    postAttachAccessory
}