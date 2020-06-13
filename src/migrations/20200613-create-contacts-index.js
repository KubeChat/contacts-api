'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createIndex('Contact', ['userEmail']);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropIndex('Contact', ['userEmail']);
  }
};