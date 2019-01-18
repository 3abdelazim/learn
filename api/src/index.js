const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello Docker & nginx!\n')
})

app.listen(80, () => {})

