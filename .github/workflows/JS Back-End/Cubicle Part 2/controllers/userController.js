const { Router } = require('express');
const router = Router();
const userServise = require('../services/userServise');



router.get('/register', (req, res) => {
    res.render('register')
});
router.get('/login', (req, res) => {
    res.render('login')
});







module.exports = router;