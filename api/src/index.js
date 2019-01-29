const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({
    text: 'Hello world! From node.js, react.js, nginx, and docker; for now'
  })
})

app.listen(80, () => {})
