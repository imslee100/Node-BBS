const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('admin');
});

router.get('/products', (req, res) => {
    res.render('admin/products.html', {
        message : '<h1>태그가 출력됩니다.</h1>',
        online : 'express'
    })
});

module.exports = router;