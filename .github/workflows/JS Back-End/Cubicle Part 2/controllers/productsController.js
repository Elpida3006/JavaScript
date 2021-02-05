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
    // console.log(req.params.cubeId);

    service.getIdAccessories(req.params.cubeId)
        .then(productHbs => {
            console.log(productHbs);
            res.render('details', { title: 'Product Details', productHbs })
        })
        .catch(error => console.error(`unhandled populate rejection`))

})

router.get('/editCube/:cubeId', (req, res) => {

    const id = req.params.cubeId;

    service.getCube(id).then(cube => {
        res.render('editCube', cube);
    }).catch(error => console.error(`Edit page not found`));

});

router.get('/deleteCube/:cubeId', (req, res) => {
    const id = req.params.cubeId;

    servise.getCube(id).then((cube) => {
        res.render('deleteCube', cube)
    }).catch(error => console.error(`Delete page not found`));
})


router.get('/:id/attachAccessory', (req, res) => {
        // console.log(req.params.id);

        let cubeId = req.params.id;
        let accessoryId = req.body.accessory;
        // console.log(accessoryId);

        Promise.all([
                service.getCube(cubeId),
                accessoryService.listDifferentAccessories(accessoryId)
            ])
            .then(([cube, accessories]) => {

                res.render('attachAccessory', { title: 'Product Accessory', cube, accessories })

            })
            .catch(error => console.error(`unhandled promises`))

    })
    //     router.get('/:id/attachAccessory', async(req, res) => {
    //         let cubeId = req.params.id;

//     let product = await service.getCube(cubeId);
//     let accessories = await accessoryService.listDifferentAccessories(product.accessories);

//     res.render('attachAccessory', { product, accessories });
// });



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