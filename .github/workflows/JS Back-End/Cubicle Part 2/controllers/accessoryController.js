const { Router } = require('express');
const router = Router();
const service = require('../services/accessoryService');

router.get('/createAccessory', (req, res) => {
    res.render('createAccessory')
});





//to do create middleware validation
router.post('/createAccessory', (req, res) => {
    console.log(req.body);

    service.postCreateAccessory(req.body)
        .then(() => {
            console.log(`Accessory is created`);
            console.log(req.body);
            res.redirect('/products')
        })
        .catch(() => res.status(500).end(`Accessory is not created`))
});

module.exports = router;