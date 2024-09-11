const express = require('express');
const { getCurrencies, convertCurrency } = require('../controller/exchangeController');

const router = express.Router();

// Route to get available currencies
router.get('/currencies', getCurrencies);

// Route to convert currency
router.get('/convert', convertCurrency);

module.exports = router;
