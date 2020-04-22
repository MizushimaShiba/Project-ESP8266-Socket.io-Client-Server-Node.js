'use strict';
module.exports = (sequelize, DataTypes) => {
  const SensorData = sequelize.define('SensorData', {
    sensor_rate: DataTypes.INTEGER,
    time: DataTypes.STRING
  }, {});
  SensorData.associate = function(models) {
    // associations can be defined here
  };
  return SensorData;
};