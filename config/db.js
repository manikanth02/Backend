const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/book_library', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
},
console.log("Database connected successfully"));

module.exports = mongoose.connection;
