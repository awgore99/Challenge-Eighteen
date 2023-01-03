const router = require('express').Router();
const dataRoutes = require('./api');

router.use('/api', dataRoutes);

module.exports = router;