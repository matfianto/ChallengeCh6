'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert("user_game_histories", [
      {
        user_game_id: "1",
        lastplayedgame: "Mobile Legend",
      },
      {
        user_game_id: "2",
        lastplayedgame: "Belum pernah bermain",
      },
      {
        user_game_id: "3",
        lastplayedgame: "Dota 2",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("user_game_histories", null, {});
  }
};
