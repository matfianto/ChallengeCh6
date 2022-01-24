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
     await queryInterface.bulkInsert("user_game_biodata", [
      {
        user_game_id: 1,
        hobby: "Basketball",
        fav_game: "Dota 2"
      },
      {
        user_game_id: 2,
        hobby: "Football",
        fav_game: "Candy Crush"
      },
      {
        user_game_id: 3,
        hobby: "Reading",
        fav_game: "Mobile Legend"
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("user_game_biodata", null, {});
  }
};
