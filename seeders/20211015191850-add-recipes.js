'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Recipes',
      [
        {
          id: 1,
          userid: 1,
          title: 'Banana bread',
          ingredients: 'banana, bread',
          direction: 'cook it in the oven',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          userid: 1,
          title: 'Tomato soup',
          ingredients: 'ripe tomatoes, soup',
          direction: 'pour, stir, repeat',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Recipes', null, {});
  },
};
