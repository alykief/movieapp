const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.get('/movies', (req, res) => {
  res.send('Hello World!')
})


app.listen(3000, () => {
  console.log('listening...');
})
