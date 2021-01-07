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
    order.belongsTo(models.user);
    order.hasMany(models.orderitem, {
      through: "orderitem",
      foreignKey: "orderId"
    });
  };
  return order;
};
