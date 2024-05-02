const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkoutControllers');

router.post('/', checkoutController.checkoutBook);
router.put('/:id', checkoutController.returnBook);

module.exports = router;
