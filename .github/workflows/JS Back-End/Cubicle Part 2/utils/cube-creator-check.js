// const Cube = require("../models/Cube");
// const user = require('../models/User')

// module.exports = function(req) {
//     return function cubeCreatorCheck(cube) {
//         const isCreator = true;
//         console.log(cube.creatorId);
//         console.log(req.user._id);
//         if (cube.creatorId !== req.user._id) {
//             isCreator = false;
//             return Promise.reject(new Error('UNAUTHORIZED'))
//         }
//         console.log(isCreator);
//         return cube;
//     };
// };