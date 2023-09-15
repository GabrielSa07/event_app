const {DataTypes} = require('sequelize');
const sequelize = require('../config/sequelize');

const Users = sequelize.difine('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phonenumber:DataTypes.INTEGER,
    cep:DataTypes.INTEGER,
    password: DataTypes.STRING,
})

module.exports = Users