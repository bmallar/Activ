const User = require('./user');
const Workout = require('./workout')
const FriendsList = require('./friendsList')

User.hasMany(Workout, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Workout.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Workout, FriendsList}