const { Router } = require('express');
const router = Router()

router.use('/admin', require('./admin')); // url, folder name

module.exports = router;