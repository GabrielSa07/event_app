const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');

const Users = sequelize.define('events', {
    name: DataTypes.STRING,
    user: DataTypes.STRING,
    date: DataTypes.DATE,
    description: DataTypes.STRING,
    guests: DataTypes.STRING,
})

module.exports = Users