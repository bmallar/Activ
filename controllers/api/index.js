const router = require('express').Router();
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./workoutRoutes');
const friendsListRoutes = require('./friendsListRoutes');

router.use('/user', userRoutes);
router.use('/workout', workoutRoutes);
router.use('/friendsList', friendsListRoutes);


module.exports = router;