import express from 'express'
import http from 'http'

const app = express()
const server = http.createServer(app)

app.get('/', (req, res) => {
  res.end('hello world')
})

server.listen(process.env.PORT || 3000, () => {})
