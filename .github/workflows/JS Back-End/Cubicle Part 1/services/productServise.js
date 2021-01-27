const uniqid = require('uniqid');
const Cube = require('../models/Cube');
const productData = require('../dataOperations/productData');

function filterProducts(query) {
    let products = productData.listProducts();

    if (query.search) {
        products = products.filter(x => x.name.toLowerCase().includes(query.search));
    }

    if (query.from) {
        products = products.filter(x => Number(x.difficultyLevel) >= query.from);
    }

    if (query.to) {
        products = products.filter(x => Number(x.difficultyLevel) <= query.to);
    }

    return products;
}

function getCreateProduct(body) {
    // console.log(body);
    let cubeData = new Cube(
        uniqid(),
        body.name,
        body.description,
        body.imageUrl,
        body.difficultyLevel,
    )

    return productData.postCreateProduct(cubeData);
}

function getId(id) {
    return productData.postId(id);
}

module.exports = {
    filterProducts,
    getCreateProduct,
    getId,
}