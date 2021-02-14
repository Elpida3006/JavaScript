const User = require('../models/User')
const getJWT = require('../utils/getJWT');
// const promisify = require('util').promisify;
// const config = require('../config/config');
// const getJWT = require('../utils/get-jwt');
// const signToken = promisify(jwt.sign);
// const checkLogin = require('../middlewares/check-auth');

const { jwtSecret, authCookieName } = require('../config/config')

function getRegister(req, res) {
    res.render('register');
}

function getProfile(req, res) {
    // let count = User.count.find({})
    res.render('profile');
}

function getLogin(req, res) {
    res.render('login');
}

function getLogout(req, res) {

    res.clearCookie(authCookieName);
    console.log(`you are logged out`);
    res.redirect('/');

}

function postRegister(req, res, err) {
    const { username, password, repeatPassword } = {...req.body };
    // console.log(password);
    // console.log(repeatPassword);

    User.create({ username, password })
        .then(() => { res.redirect('/user/login') })
        .catch(next)
        // .catch((err) => {

    //     let error = Object.keys(err.errors).map(x =>
    //         ({ message: err.errors[x].properties.message }))[0];
    //     console.log(errors);
    //     res.render('register', { error });


    // })
}

function postLogin(req, res, next) {
    const { username, password } = {...req.body };

    User.findOne({ username })
        .then(user => {
            return Promise.all([
                user,
                user ? user.comparePasswords(password, next) : false
            ])
        })
        .then(([user, match]) => {
            if (!match) {
                res.render('login', { errorMessage: 'Wrong username or password' });
                return;
            }

            const token = getJWT.createToken(user._id);


            res
                .status(200)
                .cookie(authCookieName, token, { httpOnly: true }, { maxAge: 3600000 })
                .redirect('/products')
        })
        .catch(next);
}
module.exports = {
    getRegister,
    getLogin,
    getLogout,
    getProfile,

    postRegister,
    postLogin
}