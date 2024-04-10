const router = require('express').Router();
const userRoutes = require('./userRoutes');
const historyRoutes = require('./historyRoutes');
const friendsListRoutes = require('./firendsListRoutes');

router.use('/user', userRoutes);
router.use('/history', historyRoutes);
router.use('/friendsList', friendsListRoutes);


module.exports = router;