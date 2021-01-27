const { Router } = require('express');

const router = Router();

const service = require('../services/productServise');

router.get('/', (req, res) => {
    let products = service.filterProducts(req.query);
    res.render('home', { title: 'BROWSE', products })
});

router.post('/create', (req, res) => {
    service.getCreateProduct(req.body)
        .then(() => {
            console.log(req.body);
            res.redirect('/products')
        })
        .catch(err => console.error(`Wrong command`))
})
router.get('/details/:cubeId', (req, res) => {
    let productHbs = service.getId(req.params.cubeId);

    res.render('details', { productHbs })
})
module.exports = router;