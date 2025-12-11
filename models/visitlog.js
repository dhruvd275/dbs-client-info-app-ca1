'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VisitLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VisitLog.init({
    ipAddress: DataTypes.STRING,
    userAgent: DataTypes.TEXT,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    visitedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'VisitLog',
  });
  return VisitLog;
};