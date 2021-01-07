"use strict";
module.exports = (sequelize, DataTypes) => {
  const orderItem = sequelize.define(
    "orderItem",
    {
      orderId: DataTypes.INTEGER,
      cityId: DataTypes.INTEGER
    },
    {}
  );
  orderItem.associate = function(models) {};
  return orderItem;
};
