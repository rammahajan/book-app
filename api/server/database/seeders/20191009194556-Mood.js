'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Moods',
    [{
        name: 'happy',
        createdAt: new Date(),
        updatedAt: new Date()

      },
      {
        name: 'very-happy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'sad',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'normal',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'extremely-happy',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Moods', null, {}),
};