const express = require('express');
const app = express();
// const currencyRoute = require("./routes/currency.routes");
const exchangeRoutes = require('./routes/exchangeRoute');

app.use(express.json());

app.use('/exchange', exchangeRoutes);

console.log("h11")
app.listen(8082, () => {
    console.log("App is running on port 8082");
  });