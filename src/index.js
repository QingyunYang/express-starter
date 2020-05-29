import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import userRouter from './api/user'

dotenv.config()

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/api/user', userRouter)

app.listen(process.env.PORT, () => {
  const message = `server is started on port ${process.env.PORT}`
  console.log(message)
})
