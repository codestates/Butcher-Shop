'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      inventory: {
        type: Sequelize.INTEGER
      },
      description: {
          type: Sequelize.STRING
      },
      origin: {
          type: Sequelize.STRING
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      type: {
          type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('items');
  }
};
