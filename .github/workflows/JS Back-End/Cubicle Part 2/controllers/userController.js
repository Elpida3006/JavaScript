const { Router } = require('express');
const router = Router();
const userServise = require('../services/userServise');


router.get('edit/:cubeId', (req, res) => {
    res.render('editCube')
})






module.exports = router;