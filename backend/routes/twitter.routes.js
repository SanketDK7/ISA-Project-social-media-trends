const express = require('express');
const { fetchTwitterTrends } = require('./twitter');

const app = express();

// Define a route to fetch Twitter trends
app.get('/twitter/trends', async (req, res) => {
  await fetchTwitterTrends(req, res);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
