const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');
const imageRoutes = require('./image-routes');
// const loginRoutes = require('./login-routes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
router.use('/image-upload', imageRoutes);
// router.use('/login', loginRoutes);

module.exports = router;