const express = require('express');
const router = express.Router();

const { findAllGenres, findGenreById } = require('../../controllers/api/genresController')

const { createMovie, deleteMovieById } = require('../../controllers/api/moviesController')

// Path: /api/
//Genres
router.get('/genres', findAllGenres);
router.get('/genres/detail/:id', findGenreById);

// Movies
router.post('/movies/create', createMovie)
router.delete('/movies/:id', deleteMovieById);

module.exports = router;