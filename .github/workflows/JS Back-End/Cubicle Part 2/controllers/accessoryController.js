const { Router } = require('express');
const router = Router();
const service = require('../services/accessoryService');
const isLogged = require('../middlewares/check-auth')

router.get('/createAccessory', isLogged(true), (req, res) => {
    res.render('createAccessory')
});





//to do create middleware validation
router.post('/createAccessory', isLogged(true), (req, res) => {
    console.log(req.body);

    service.postCreateAccessory(req.body, req.user._id)
        .then(() => {
            console.log(`Accessory is created`);
            console.log(req.body);
            res.redirect('/products')
        })
        .catch(() => res.status(500).end(`Accessory is not created`))
});


router.get('/editAccessory/:id', isLogged(true), (req, res, next) => {

    const id = req.params.id;
    let isCreatorAccessory = false;

    service.getId(id).then(productHbs => {
        console.log(productHbs.creatorId);
        if (productHbs.creatorId) {
            if (productHbs.creatorId.toString() === req.user._id.toString()) {
                isCreatorAccessory = true
                res.render('editAccessory', productHbs);
            }


        } else {
            res.redirect(`/products`)

        }
    }).catch(error => console.error(`
                                    Edit page not found `));

});

router.get('/deleteAccessory/:id', isLogged(true), (req, res) => {
    const id = req.params.id;

    service.getId(id).then((productHbs) => {
        console.log(productHbs.creatorId);
        if (productHbs.creatorId) {
            if (productHbs.creatorId.toString() === req.user._id.toString()) {
                isCreatorAccessory = true
                res.render('deleteAccessory', productHbs)
            }


        } else {
            res.redirect(`/products`)

        }

    }).catch(error => console.error(`
                                    Delete page not found `));
})

router.post('/editAccessory/:id', isLogged(true), (req, res) => {

    const id = req.params.id;

    const { name, description, imageUrl } = req.body

    service.postEditAccessory({ _id: id }, { name, description, imageUrl })
        .then(() => res.redirect('/'))
        .catch(error => console.error(`
                                    Edit not found `));

});
router.post('/deleteAccessory/:id', isLogged(true), (req, res) => {

    const id = req.params.id;

    service.postDeleteAccessory(id)
        .then(() => res.redirect('/'))
        .catch(error => console.error(`
                                    Is not Delete `));

});
module.exports = router;