"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isOwner: DataTypes.BOOLEAN
    },
    {}
  );
  user.associate = function(models) {
    user.hasMany(models.order);
  };
  return user;
};

//this is user model
// this is another comment.
