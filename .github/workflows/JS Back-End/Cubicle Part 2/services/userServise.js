const User = require('../models/User')
const jwt = require('jsonwebtoken');
const promisify = require('util').promisify;
const signToken = promisify(jwt.sign);
const config = require('../config/config');
const { jwtSecret, authCookieName } = config;

function postRegister(userdata) {
    console.log(userdata);
    if (userdata.password !== userdata.repeatPassword) { return }
    return User.create(userdata);
}

function postLogin(userdata) {
    const { username, password } = userdata
    console.log(userdata);
    User.findOne({ username })
        .then(User =>
            Promise.all([User, User ? User.comparePasswords(password) : false])
        )
        .then(([User, match]) => {
            console.log(User);
            if (!match) {
                res.render('login', { errorMessage: 'Wrong username or password' });
                return;
            }
            return signToken({ _id: User._id }, jwtSecret)
        })
        .then(token => {
            if (!token) { throw error("token is not generated"); }
            console.log(token);
            console.log(`You are logged`);
            return token;
        })
        .catch(error =>

            console.error(`token is missing`))
}
module.exports = {
    postRegister,
    postLogin
}