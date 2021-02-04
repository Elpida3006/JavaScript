const { Router } = require('express');
const router = Router();
const service = require('../services/productServise');
const accessoryService = require('../services/accessoryService')
const { validateInput } = require('../middlewares/inputValidate');

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

    service.getIdAccessories(req.params.cubeId)
        .then(productHbs => {
            console.log(productHbs);
            res.render('details', { title: 'Product Details', productHbs })
        })
        .catch(error => console.error(`unhandled populate rejection`))

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

router.post('/create', validateInput, (req, res) => {
    service.postCreateCube(req.body)
        .then(() => {
            console.log(req.body);
            res.redirect('/products')
        })
        .catch(() => res.status(500).end())
})


router.post('/:id/attachAccessory', (req, res) => {
    let accessoryId = req.body.accessory
    let cubeId = req.params.id;
    // Promise.all([
    //         Cube.findById(cubeId).lean(),
    //         Accessory.findById(accessoryId).lean()

    //     ])
    //     .then(([product, accessory]) => {
    //         // console.log({ product, accessory });
    //         product.accessories.push(accessory);
    //         return product.save();
    //     })
    service.postAttachAccessory(cubeId, accessoryId)
        .then(() => {
            res.redirect(`/products`)
        })
        .catch(() => res.status(500).end(`no handled Promise.All`))

})

module.exports = router;