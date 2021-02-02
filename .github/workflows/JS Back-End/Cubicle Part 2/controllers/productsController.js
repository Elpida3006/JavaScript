const { Router } = require('express');
const router = Router();
const service = require('../services/productServise');
const accessoryService = require('../services/accessoryService')


router.get('/', (req, res) => {
    service.filterProducts(req.query)
        .then(products => {
            res.render('home', { title: 'BROWSE', products })
        })
        .catch(() => res.status(500).end())

});
router.get('/create', (req, res) => {
    res.render('create')
});
router.get('/about-cubicle', (req, res) => {
    res.render('about');
});
router.get('/details/:cubeId', (req, res) => {
    console.log(req.params.cubeId);

    service.getId(req.params.cubeId)
        .then(productHbs => {
            console.log(productHbs);
            res.render('details', { title: 'Product Details', productHbs })
        })
})

router.get('/:id/attachAccessory', (req, res) => {
    console.log(req.params.id);

    let cubeId = req.params.id;

    Promise.all([
            service.getId(cubeId),
            accessoryService.listAccessories()
        ])
        .then(([cube, accessories]) => {
            console.log({ cube, accessories });

            res.render('attachAccessory', { title: 'Product Accessory', cube, accessories })

        })
        .catch(error => console.error(`unhandled promises`))

})

router.post('/create', (req, res) => {
    service.postCreateCube(req.body)
        .then(() => {
            console.log(req.body);
            res.redirect('/products')
        })
        .catch(() => res.status(500).end())
})

module.exports = router;