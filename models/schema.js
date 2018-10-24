const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { String, required: true },
  director: String,
  rating: Number,
  year: Number
});

const Movies = mongoose.model('Movies', movieSchema);

module.exports = Movies;
// test
