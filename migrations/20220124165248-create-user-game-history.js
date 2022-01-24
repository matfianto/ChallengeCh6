'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user_game_histories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_game_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'user_games', //nama table yang di referensikan
          key: 'id'
        }
      },
      lastplayedgame: {
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user_game_histories');
  }
};