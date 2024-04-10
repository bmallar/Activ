const sequelize = require('../config/connection');
const { User, Workout, FriendsList } = require('../models');

const userData = require('./userData.json');
const workoutData = require('./workoutData.json');
const friendsListData = require('./friendsListData.json')






seedDatabase();
