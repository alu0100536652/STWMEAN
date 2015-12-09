var express = require('express'),
    router  = express.Router(),
    apiController = require('../controller/apicontroller');

router.get('/guachinches', apiController.guachincheList);
router.get('/guachinches/check', apiController.guachincheDetails);
router.post('/guachinches', apiController.guachinchePost);

module.exports = router;