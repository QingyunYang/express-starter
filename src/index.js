import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import sequelize from './sequelize'

dotenv.config()
console.log(process.env.NODE_ENV)

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.listen(process.env.PORT, () => {
  const message = `server is started on port ${process.env.PORT}`
  console.log(message)
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  })