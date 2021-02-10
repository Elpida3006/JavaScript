module.exports = function(req) {
    return function cubeCreatorCheck(cube) {
        const isCreator = true;
        if (cube.creatorId !== req.user._id) {
            isCreator = false;
            return Promise.reject(new Error('UNAUTHORIZED'))
        }

        return cube;
    };
};