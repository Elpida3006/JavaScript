const { Router } = require('express');
const router = Router();
const service = require('../services/productServise');
const accessoryService = require('../services/accessoryService')
const { validateInput } = require('../middlewares/inputValidate');
const { isValidObjectId } = require('mongoose');
// const cubeCreatorCheck = require('../utils/cube-creator-check')
const isLogged = require('../middlewares/check-auth');

router.get('/', (req, res) => {
    service.filterProducts(req.query)
        .then(products => {
            res.render('home', { title: 'BROWSE', products })
        })
        .catch(() => res.status(500).end())

});
router.get('/create', isLogged(true), (req, res) => {
    res.render('create')
});
router.get('/about-cubicle', (req, res) => {
    res.render('about');
});

router.get('/myCubes', (req, res) => {

    let myCubes = []
    service.filterProducts(req.query)
        .then(products => {
            // const myID = req.user._id
            // const cubeID = Cube.creatorId
            products.forEach(cube => {

                if (cube.creatorId) {
                    let cubeCreatorId = (cube.creatorId.toString());
                    let myID = (req.user._id.toString());
                    // let cubeID = (cube._id.toString());
                    if (cubeCreatorId === myID) {

                        myCubes.push(cube)
                            // console.log(myCubes);
                    }
                }
            })
            return myCubes;

        })
        .then((myCubes) => {
            console.log(myCubes);
            res.render('myCubes', { title: 'myCubes', myCubes })

        })
        .catch(() => res.status(500).end())

});

router.get('/details/:cubeId', (req, res) => {
    // console.log(req.params.cubeId);
    let isCreator = false;


    service.getIdAccessories(req.params.cubeId)
        .then(productHbs => {
            if (productHbs.creatorId) {
                productHbs.creatorId.toString() === req.user._id.toString() ? isCreator = true : isCreator = false

                res.render('details', { title: 'Product Details', productHbs, isCreator })
            } else {
                res.render('details', { title: 'Product Details', productHbs });
            }

        })
        .catch(error => {
            console.error(`unhandled populate rejection`)
            res.redirect('/products')
        })

})

router.get('/editCube/:cubeId', isLogged(true), (req, res) => {

    const id = req.params.cubeId;

    service.getCube(id)
        // .then(

    //     cubeCreatorCheck(req)
    // )
    .then(productHbs => {
        res.render('editCube', productHbs);
    }).catch(error => {
        console.error(`Edit page not found`)
        res.redirect('/products')
    });

});

router.get('/deleteCube/:cubeId', isLogged(true), (req, res) => {
    const id = req.params.cubeId;

    service.getCube(id)
        // .then(cubeCreatorCheck(req))
        .then((productHbs) => {
            res.render('deleteCube', productHbs)
        }).catch(error => {
            console.error(`Delete page not found`)
            res.redirect('/products');
        })
})


router.get('/:id/attachAccessory', isLogged(true), (req, res) => {
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



router.post('/create', validateInput, isLogged(true), (req, res) => {
    service.postCreateCube(req.body, req.user._id)
        .then(() => {
            console.log(req.body);
            res.redirect('/products')
        })
        .catch(() => res.status(500).end())
})


router.post('/:id/attachAccessory', isLogged(true), (req, res) => {
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

router.post('/editCube/:cubeId', isLogged(true), (req, res) => {

    const id = req.params.cubeId;

    const { name, description, difficultyLevel, imageUrl } = req.body

    service.postEditCube({ _id: id }, { name, description, difficultyLevel, imageUrl })
        .then(() => res.redirect(`/products/details/${req.params.cubeId}`))
        .catch(error => console.error(`Edit  not found`));

});
router.post('/deleteCube/:cubeId', isLogged(true), (req, res) => {

    const id = req.params.cubeId;

    service.postDeleteCube(id)
        .then(() => res.redirect('/'))
        .catch(error => console.error(`Is not Delete`));

});

module.exports = router;