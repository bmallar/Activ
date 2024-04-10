const sequelize = require('../config/connection');
const { User, History, FriendsList } = require('../models');

const userData = require('./userData.json');
const historyData = require('./historyData.json');
const friendsListData = require('./friendsListData.json')






seedDatabase();
