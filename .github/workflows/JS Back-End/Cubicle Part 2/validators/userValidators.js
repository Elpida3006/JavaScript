const { body } = require('express-validator');

const repeatPasswordCheck = body('repeatPassword').custom((value, { req }) => {
    if (value !== req.body.password) {
        throw new Error('Passwords don\'t match!');
    }
    return true;
});

module.exports = {
    repeatPasswordCheck,

};