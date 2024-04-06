const axios = require('axios');

// Define the function to handle the Twitter API request
const getTwitterData = async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://twitter-v24.p.rapidapi.com/trends/',
    params: {
      woeid: '1'
    },
    headers: {
      'X-RapidAPI-Key': '1d06dddd4dmsh8413849ed6c1f03p14ef9bjsn327b5588cb81',
      'X-RapidAPI-Host': 'twitter-v24.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.json(response.data); // Send the Twitter data as JSON response
  } catch (error) {
    console.error(error);
    }
};

// Export the controller function
module.exports = {
  getTwitterData
};
