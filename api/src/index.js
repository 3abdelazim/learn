const express = require('express')
const app = express()

app.get('/api', (req, res) => {
  res.json({ text: 'Hello Docker & nginx!' })
})

app.listen(80, () => {})

