// const { Model, DataTypes } = require("sequelize");
// const sequelize = require("../config/connection");

// class Mood extends Model {}

// Mood.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     parentMood: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     childMood: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     grandChildMood: {
//       type: DataTypes.STRING,
//       allowNull: true,
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: "User",
//         key: "id",
//       },
//     },
//     post_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: "Post",
//         key: "id",
//       },
//     },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "Mood",
//   }
// );

// module.exports = Mood;
