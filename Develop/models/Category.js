const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, // Prevent null values
      primaryKey: true, // Set as primary key
      autoIncrement: true // Uses auto increment
    },
    category_name: {
      type: DataTypes.STRING, // Uses string data type
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false, // Don't automatically create createdAt/updatedAt timestamp fields
    freezeTableName: true, // Don't pluralize name of database table
    underscored: true, // Use underscores instead of camel-casing
    modelName: 'category',
  }
);

module.exports = Category;
