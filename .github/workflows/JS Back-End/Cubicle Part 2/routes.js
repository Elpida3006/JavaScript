const { Router } = require('express');

const productController = require('./controllers/productsController');
const homeController = require('./controllers/homeController');

const router = Router();

router.use('/', homeController);
router.use('/products', productController);
router.get('*', (req, res) => {
    res.render('404');
});

module.exports = router;