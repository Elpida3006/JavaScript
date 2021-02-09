const config = require('../config/config');
const jwt = require('jsonwebtoken');
const { authCookieName, authHeaderName, jwtSecret } = config;
const getJWT = require('../utils/get-jwt');
// const { jwtSecret } = config;

module.exports = function(req, res, next) {

    const token = getJWT(req);

    if (!token) { next(); return; }

    jwt.verify(token, jwtSecret, function(err, decoded) {
        if (err) { next(err); return; }
        req.user = decoded;
        res.locals.user = decoded;
        res.locals.isLogged = true;

        // req.user = { _id: decoded._id };
        // res.locals.isLogged = !!req.user;
        //locals - za ada ne go podavame navsqkade, a isLogged izpolzvame v hbs
        next();
    });
};