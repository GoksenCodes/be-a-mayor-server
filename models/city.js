"use strict";
module.exports = (sequelize, DataTypes) => {
  const city = sequelize.define(
    "city",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: DataTypes.TEXT,
      population: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      inStock: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    },
    {}
  );

  city.associate = function(models) {
    city.belongsTo(models.user);
  };
  return city;
};
