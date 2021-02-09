const { Router } = require('express');
const router = Router();
const userServise = require('../services/userServise');
const config = require('../config/config');
const checkLogin = require('../middlewares/check-auth');

router.get('/register', checkLogin(false), userServise.getRegister)

router.get('/login', checkLogin(false), userServise.getLogin)

router.get('/logout', checkLogin(true), userServise.getLogout)



router.post('/register', checkLogin(false), userServise.postRegister)

router.post('/login', checkLogin(false), userServise.postLogin)








module.exports = router;