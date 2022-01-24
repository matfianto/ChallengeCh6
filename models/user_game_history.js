'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_game_history.belongsTo(models.user_game, { foreignKey: 'user_game_id', as: 'userpengguna'});
    }
  };
  user_game_history.init({
    user_game_id: DataTypes.INTEGER,
    lastplayedgame: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user_game_history',
    timestamps: false
  });
  return user_game_history;
};