const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Here,we are defining the routes
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/checkouts', checkoutRoutes);

// Here,we are staring the servers
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Backend server of BOOK!');
})

// Here,we are designing Backedn
