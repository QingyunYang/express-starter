import dotenv from 'dotenv'
import Sequelize from 'sequelize'

dotenv.config()

const {
  DB_HOST,
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
} = process.env

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   })

sequelize.sync()

export default sequelize
