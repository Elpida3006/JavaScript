const fsAsync = require('fs/promises');
const path = require('path');
const database = require('../config/database.json');

module.exports = {

    listProducts() {
        return database;
    },
    postCreateProduct(serviseData) {
        // console.log(serviseData);
        database.push(serviseData);

        return fsAsync.writeFile(
            path.join(__dirname, '../config/database.json'),
            JSON.stringify(database)
        );

    },

    postId(cubeId) {
        return database.find(x => x.id == cubeId);
    }

}