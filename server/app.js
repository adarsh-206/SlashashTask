const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;

// Connect to MongoDB
mongoose.connect('mongodb://user:user@ac-dg6jkbl-shard-00-00.gvtez8y.mongodb.net:27017,ac-dg6jkbl-shard-00-01.gvtez8y.mongodb.net:27017,ac-dg6jkbl-shard-00-02.gvtez8y.mongodb.net:27017/?ssl=true&replicaSet=atlas-14p0hh-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Middleware
app.use(cors());
app.use(express.json());

// Import and use your routes
const favoritesRouter = require('./router/favorites');
app.use('/api/favorites', favoritesRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



