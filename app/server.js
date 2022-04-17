const http = require('http')
const server = http.createServer(app)

import app from './app'

server.listen(3000, () => {
  console.log('hi: 3000')
})
