const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  isbn: String,
  published_at: Date,
  copies: Number,
});

module.exports = mongoose.model('Book', bookSchema);
