import Sequelize from 'sequelize'

const sequelize = new Sequelize('test', 'root', 'ilike8ds', {
  host: 'localhost',
  dialect: 'mysql'
})

export default sequelize
