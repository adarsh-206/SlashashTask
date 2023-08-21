// routes/favorites.js
const express = require('express');
const router = express.Router();
const FavoriteMovie = require('../models/FavouriteMovie');

router.post('/', async (req, res) => {
    try {
        const { imdbID, title, year, type } = req.body;
        const favoriteMovie = new FavoriteMovie({ imdbID, title, year, type });
        await favoriteMovie.save();
        res.json(favoriteMovie);
    } catch (error) {
        res.status(500).json({ error: 'Failed to save favorite movie' });
    }
});

router.get('/', async (req, res) => {
    try {
        const favoriteMovies = await FavoriteMovie.find();
        res.json(favoriteMovies);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve favorite movies' });
    }
});

module.exports = router;
