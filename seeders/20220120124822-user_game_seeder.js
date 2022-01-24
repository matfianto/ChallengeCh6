"use strict";

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
    await queryInterface.bulkInsert("user_games", [
      {
        name: "Muhammad Zaid",
        age: "21",
        address: "Johor Bahru",
      },
      {
        name: "Muhammad Aqsal",
        age: "22",
        address: "Johor Lahma",
      },
      {
        name: "Muhammad Salwan",
        age: "23",
        address: "Johor Aja",
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
    await queryInterface.bulkDelete("user_games", null, {});
  },
};
