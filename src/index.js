import express from 'express'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())

const port = 3000
app.listen(port, () => {
  const message = `server is started on port ${port}`
  console.log(message)
})