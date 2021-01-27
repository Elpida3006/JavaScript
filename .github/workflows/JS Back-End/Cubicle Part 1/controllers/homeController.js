const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.redirect('/products');
});
// router.get('/products', (req, res) => {
//     res.render('home');
// })
router.get('/create', (req, res) => {
    res.render('create')
})
router.get('/about', (req, res) => {
    res.render('about');
})

module.exports = router;