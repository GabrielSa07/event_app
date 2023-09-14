'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('users', {

    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },

    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },

    email: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    phonenumber: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  
    cep: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },

    password: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },

    createdAt: {
      type: Sequelize.DATE,
    },

    updateAt: {
      type: Sequelize.DATE,
    }

   });
     
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('users');   
  }
};
