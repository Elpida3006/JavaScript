const User = require('../models/User')
const jwt = require('jsonwebtoken');
const promisify = require('util').promisify;
const config = require('../config/config');
const getJWT = require('../utils/get-jwt');
const signToken = promisify(jwt.sign);
const checkLogin = require('../middlewares/check-auth');

const { jwtSecret, authCookieName } = config;

function getRegister(req, res) {
    res.render('register');
}

function getLogin(req, res) {
    res.render('login');
}

function getLogout(req, res) {

    res.clearCookie(authCookieName);
    console.log(`you are logged out`);
    res.redirect('/');

}

function postRegister(req, res, error) {
    const { username, password, repeatPassword } = req.body;
    User.create({ username, password })
        .then(() => { res.redirect('/user/login') })
        .catch(error => {
            console.error(`Is not register`)
            res.render('/')
        })
}

function postLogin(req, res, next) {
    const { username, password } = req.body;
    User.findOne({ username })
        .then(user => Promise.all([user, user ? user.comparePasswords(password) : false]))
        .then(([user, match]) => {
            if (!match) {
                res.render('login', { errorMessage: 'Wrong username or password' });
                return;
            }
            return signToken({ userId: user._id }, jwtSecret)
        })
        .then(jwtToken => {
            if (!jwtToken) { return; }
            res.cookie(authCookieName, jwtToken, { httpOnly: true });

            res.redirect('/');
        })
        .catch(next);
}
module.exports = {
    getRegister,
    getLogin,
    getLogout,

    postRegister,
    postLogin
}