const mongoose = require('mongoose');

const favoriteMovieSchema = new mongoose.Schema({
    imdbID: { type: String, required: true },
    title: { type: String, required: true },
    year: { type: String, required: true },
    type: { type: String, required: true },
    posterUrl: { type: String, required: true }
});

const FavoriteMovie = mongoose.model('FavoriteMovie', favoriteMovieSchema);

module.exports = FavoriteMovie;
