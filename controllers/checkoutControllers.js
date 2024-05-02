const Checkout = require('../models/checkout');
const Book = require('../models/book');

exports.checkoutBook = async (req, res) => {
  try {
    const { user_id, book_id } = req.body;

    // Check if the book is available
    const book = await Book.findById(book_id);
    if (!book || book.copies === 0) {
      return res.status(400).json({ error: 'Book not available for checkout' });
    }

    // Create checkout record
    const checkout = new Checkout({
      user_id,
      book_id,
      checkout_date: new Date(),
    });

    await checkout.save();

    // Update book copies
    book.copies -= 1;
    await book.save();

    res.json({ message: 'Book checked out successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.returnBook = async (req, res) => {
  try {
    const { id } = req.params;

    // Find checkout record by ID
    const checkout = await Checkout.findById(id);
    if (!checkout) {
      return res.status(404).json({ error: 'Checkout record not found' });
    }

    // Update return date
    checkout.return_date = new Date();
    await checkout.save();

    // Increase book copies
    const book = await Book.findById(checkout.book_id);
    book.copies += 1;
    await book.save();

    res.json({ message: 'Book returned successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};
