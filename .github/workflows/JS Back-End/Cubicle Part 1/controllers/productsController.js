const { Router } = require('express');

const router = Router();

const service = require('../services/productServise');

// router.get('/', (req, res) => {
//     let products = service.searchByFilter(req.query);
//     res.render('home', { title: 'BROWSE', products })
// });

module.exports = router;