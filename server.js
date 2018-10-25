const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Movies = require('./models/schema.js')

app.use(express.json())
app.use(express.static('public'))

const moviesController = require('./controllers/movies.js')
app.use('/movies', moviesController)

mongoose.connect('mongodb://localhost:27017/moviesapp', {useNewUrlParser: true})

mongoose.connection.once('open', () => {
  console.log('connected to mongoose');
})
app.listen(3000, () => {
  console.log('listening...');
})
