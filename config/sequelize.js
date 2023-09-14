const Sequelize = require('sequelize')
const databse = require('./config')

const sequelize = new Sequelize (database);
module.exports = sequelize;