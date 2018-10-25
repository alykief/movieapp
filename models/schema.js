const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: String,
  rating: Number,
  year: Number
});

const Movies = mongoose.model('Movies', movieSchema);

module.exports = Movies;
//Chchchanges
// its a pirates life for me
