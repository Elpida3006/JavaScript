const { body } = require('express-validator');
const validator = require('validator');
// const repeatPasswordCheck = body('repeatPassword').custom((value, { req }) => {
//     if (value !== req.body.password) {
//         throw new Error('Passwords don\'t match!')
//     }
//     return true;
// });
const repeatPasswordCheck = (req, res, next) => {
    let password = req.body.password;
    let repeatPassword = req.body.repeatPassword;

    if (password !== repeatPassword) {
        console.log(`different password`);
        return res.render('register', { error: { message: 'Password missmatch!' } });
    }
    next()
}

const isFullPassword = (req, res, next) => {
    let password = req.body.password;
    let primarlyPass = /^[a-zA-Z0-9]+$/;

    if (!primarlyPass.test(password)) {
        return res.render('register', { error: { message: 'Password is not STRONG and should contain only english letters and digits!' } });
        // throw { error: { message: 'Password is not STRONG and should contain only english letters and digits!' } };

    }

    next()
}
const strongPassword = (req, res, next) => {
    let password = req.body.password;
    let isStrong = validator.isStrongPassword(password, {
        maxlength: 60,
        minlength: 3
    });
    if (!isStrong) {
        return res.render('register', { error: { message: 'Password is not STRONG' }, username: req.body.username });
        // throw { error: { message: 'Password is not STRONG' }, username: req.body.username }
    }




    next()
}


module.exports = {
    repeatPasswordCheck,
    isFullPassword,
    strongPassword

};