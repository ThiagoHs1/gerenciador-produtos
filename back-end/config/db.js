const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('gerenciador_produtos', 'postgres', '123', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = { sequelize, Sequelize };