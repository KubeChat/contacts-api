'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contact', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
      userEmail: {
        type: Sequelize.STRING
      },
      contactEmail: {
        type: Sequelize.STRING,
        references: {
          model: 'UserImage',
          key: 'email'
        },
      },
      contactName: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Contact');
  }
};