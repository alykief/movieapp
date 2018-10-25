const express = require('express');
const router = express.Router();

//Require Movies
const Movies = require('../models/schema.js');

//Create Route
router.post('/', (req, res)=>{
  Movies.create(req.body, (err, createdMovie)=>{
    res.json(createdMovie);
  });
});

//Index Route
router.get('/', (req, res)=>{
  Movies.find({}, (err, foundMovies)=>{
    res.json(foundMovies);
  });
});

//Delete Route
router.delete('/:id', (req, res)=>{
  Movies.findByIdAndRemove(req.params.id, (err, deletedMovie)=>{
    res.json(deletedMovie);
  });
});

//Update Route
router.put('/:id', (req, res)=>{
  Movies.findByIdAndUpdate(req.params.id, req.body, { new:true }, (err, updatedMovie)=>{
    res.json(updatedMovie);
  });
});

module.exports = router;
