const Sequelize = require('sequelize')
const db = require('../db')

const Cars = db.define('cars', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Cars