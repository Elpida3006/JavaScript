const fsAsync = require('fs/promises');
const path = require('path');
const database = require('../config/database.json');

module.exports = {
    listProducts() {
        return database;
    }
}