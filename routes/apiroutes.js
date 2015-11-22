var express = require('express'),
    router  = express.Router(),
    apiController = require('../controller/apicontroller');

router.get('/guachinches', apiController.guachincheList);
router.post('/guachinches', apiController.guachinchePost);

module.exports = router;