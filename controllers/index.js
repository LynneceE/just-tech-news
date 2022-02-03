// collect API end point and prefix with path /api

const router = require('express').Router();


const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js'); // pulled from controller file


router.use('/api', apiRoutes);
router.use('/', homeRoutes);


module.exports = router;