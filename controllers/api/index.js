const router = require('express').Router();
const userRoutes = require('./userRoutes');
const workoutRoutes = require('./exerciseRoutes');
const historyRoutes = require('./workoutRoutes');

router.use('/user', userRoutes);
router.use('/workout', workoutRoutes);
router.use('/history', historyRoutes)


module.exports = router;