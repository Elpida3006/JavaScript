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


router.get('/editAccessory/:id', (req, res) => {

    const id = req.params.id;

    service.getId(id).then(productHbs => {
        res.render('editAccessory', productHbs);
    }).catch(error => console.error(`Edit page not found`));

});

router.get('/deleteAccessory/:id', (req, res) => {
    const id = req.params.id;

    service.getId(id).then((productHbs) => {
        res.render('deleteAccessory', productHbs)
    }).catch(error => console.error(`Delete page not found`));
})

router.post('/editAccessory/:id', (req, res) => {

    const id = req.params.id;

    const { name, description, imageUrl } = req.body

    service.postEditAccessory({ _id: id }, { name, description, imageUrl })
        .then(() => res.redirect('/'))
        .catch(error => console.error(`Edit  not found`));

});
router.post('/deleteAccessory/:id', (req, res) => {

    const id = req.params.id;

    service.postDeleteAccessory(id)
        .then(() => res.redirect('/'))
        .catch(error => console.error(`Is not Delete`));

});
module.exports = router;