"use strict";
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define(
    "order",
    {
      userId: DataTypes.INTEGER
    },
    {}
  );
  order.associate = function(models) {
    order.belongsToMany(models.city, {
      through: "orderitem",
      foreignKey: "orderId"
    });
  };
  return order;
};
