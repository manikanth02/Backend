const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  book_id: mongoose.Schema.Types.ObjectId,
  checkout_date: Date,
  return_date: Date,
});

module.exports = mongoose.model('Checkout', checkoutSchema);
