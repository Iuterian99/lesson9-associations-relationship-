const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  "postgres://postgres:abdu1882@localhost:5432/basics"
);
const Restaurants = sequelize.define("restaurants", {
  name: {
    type: DataTypes.STRING(64),
    allowNull: false,
    validate: {
      min: 3,
    },
  },
});

const Branches = sequelize.define("branches", {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      min: 3,
      max: 64,
    },
  },
});

Restaurants.hasOne(Branches);
Branches.belongsTo(Restaurants);

module.exports = {
  Restaurants,
  Branches,
  sequelize,
};
