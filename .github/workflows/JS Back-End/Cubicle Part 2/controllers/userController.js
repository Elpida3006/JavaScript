const { Router } = require('express');
const router = Router();
const userServise = require('../services/userServise');
const config = require('../config/config');
const { jwtSecret, authCookieName } = config;
const jwt = require('jsonwebtoken');
const promisify = require('util').promisify;
const getJWT = require('../utils/get-jwt')

router.get('/register', (req, res) => {
    res.render('register')
});
router.get('/login', (req, res) => {
    res.render('login')
});
router.get('/logout', (req, res) => {

    res.clearCookie(authCookieName);
    console.log(`you are logged out`);
    res.redirect('/');


});



router.post('/register', (req, res) => {
    console.log(req.body);
    userServise.postRegister(req.body)
        .then(() => { res.redirect('login') })
        .catch(error => {
            console.error(`Is not register`)
            res.render('/')
        })
});
router.post('/login', async(req, res) => {
    console.log(req.body);

    try {
        const token = await userServise.postLogin(req.body)
        res.cookie(authCookieName, token, { httpOnly: true });
        res.redirect('/');
    } catch (error) {
        console.error(`Is not login`)
        res.render('*')
    }

});







module.exports = router;