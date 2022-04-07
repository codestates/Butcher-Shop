'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      // define association here
    }
  }
  order_item.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      order_count: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'order_item'
    }
  );
  return order_item;
};
