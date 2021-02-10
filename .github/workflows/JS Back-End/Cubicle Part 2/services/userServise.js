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

function getLogin(req, res) {
    res.render('login');
}

function getLogout(req, res) {

    res.clearCookie(authCookieName);
    console.log(`you are logged out`);
    res.redirect('/');

}

function postRegister(req, res, error) {
    const { username, password, repeatPassword } = {...req.body };
    User.create({ username, password })
        .then(() => { res.redirect('/user/login') })
        .catch(error => {
            console.error(`Is not register`)
            res.render('/')
        })
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

    postRegister,
    postLogin
}