const axios = require('axios');

// Controller to get available currencies
const getCurrencies = async (req, res, next) => {
  try {
    const response = await axios.get(`https://open.er-api.com/v6/latest`);
    // console.log(response.data.rates);
    const currencies = Object.keys(response.data.rates);
    res.status(200).json({ data: currencies });
  } catch (error) {
    next(error);
  }
};

// Controller to convert currency
const convertCurrency = async (req, res, next) => {
  const { value, currency, to_currency } = req.query;

  // Validate inputs
  if (!value || isNaN(value) || value < 0 || !currency || !to_currency) {
    return res.status(400).json({ message: 'Incomplete or Incorrect data passed' });
  }

  try {
    const response = await axios.get(`https://open.er-api.com/v6/latest/${currency}`);
    const rates = response.data.rates;

    if (!rates[to_currency]) {
      return res.status(404).json({ message: 'Cannot find given currency code' });
    }

    const result = value * rates[to_currency];
    res.status(200).json({ result });
  } catch (error) {
    next(error);
  }
};

module.exports = { getCurrencies, convertCurrency };
