const router = require('express').Router();
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./exerciseRoutes');
const friendsListRoutes = require('./friendsListRoutes');
const historyRoutes = require('./workoutRoutes');

router.use('/user', userRoutes);
router.use('/workout', workoutRoutes);
router.use('/friendsList', friendsListRoutes);
router.use('/history', historyRoutes)


module.exports = router;