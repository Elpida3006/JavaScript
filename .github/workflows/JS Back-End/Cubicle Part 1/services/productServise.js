const uniqid = require('uniqid');
const Cube = require('../models/Cube');
const productData = require('../dataOperations/productData');

function searchByFilter(query) {
    let products = productData.listProducts();

    if (query.search) {
        products = products.filter(x => x.name.toLowerCase().includes(query.search));
    }

    if (query.from) {
        products = products.filter(x => Number(x.level) >= query.from);
    }

    if (query.to) {
        products = products.filter(x => Number(x.level) <= query.to);
    }

    return products;
}

module.exports = {
    searchByFilter,
}