'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('events', { 

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

      user: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      descripiton: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      guests: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      createdAt: {
        type: Sequelize.DATE,
      },

      updatedAt: {
        type: Sequelize.DATE,
      },
      
     });
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('events');
  }
};
