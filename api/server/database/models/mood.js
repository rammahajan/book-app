'use strict';
module.exports = (sequelize, DataTypes) => {
  const Mood = sequelize.define('Mood', {
    name: DataTypes.STRING
  }, {});
  Mood.associate = function(models) {
    // associations can be defined here
  };
  return Mood;
};