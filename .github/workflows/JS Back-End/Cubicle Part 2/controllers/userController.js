const { Router } = require('express');
const router = Router();
const userServise = require('../services/userServise');



router.get('/register', (req, res) => {
    res.render('register')
});
router.get('/login', (req, res) => {
    res.render('login')
});
router.get('/logout', (req, res) => {
    // const token = getJWT(req);

    // if (!token) { res.redirect('/'); return; }

    // jwt.verify(token, jwtSecret, function(err, payload) {
    //     if (Date.now() < payload.exp) {
    //         // if token is valid then put it inside blacklist database
    //     }
    //     res.clearCookie(authCookieName);
    res.redirect('/');
    // });
})







module.exports = router;