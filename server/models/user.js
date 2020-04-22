'use strict';
const Bcrypt = require('../helper/bcrypt')

module.exports = (sequelize, DataTypes) => {
  // const User = sequelize.define('User', {
    
  // }, {});

  class User extends sequelize.Sequelize.Model{}
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Please use another email"
      },
      validate: {
        notNull: {
          args: true,
          msg: "Please input email"
        },
        notEmpty: {
          args: true,
          msg: "Please input email"
        },
        isEmail: {
          args: true,
          msg: "Please use email format"
        },
        notContains: {
          args: ' ',
          msg: "Please input email format"
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: "Please input password!"
        },
        notEmpty: {
          args: true,
          msg: "Please input password!"
        },
        len: {
          args: [5],
          msg: `Minimum password length is 5`
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (User, options) => {
        User.password = Bcrypt.hashPassword(User.password)
      }
    },
    sequelize, modelName: "User"
  })
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};