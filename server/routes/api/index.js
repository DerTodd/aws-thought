const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');
// const userChoreRoutes = require('./userChore-routes');
// const loginRoutes = require('./login-routes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
// router.use('/userChore', userChoreRoutes);
// router.use('/login', loginRoutes);

module.exports = router;