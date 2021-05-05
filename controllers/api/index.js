const router = require('express').Router();
const blogRoutes = require('./post-routes');
const blogRoutes = require('./user-routes');

router.use('/posts', postRoutes);
router.use('/user', postRoutes);

module.exports = router;
