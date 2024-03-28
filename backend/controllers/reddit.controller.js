const axios = require('axios');

exports.getPopularPosts = async (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://reddit34.p.rapidapi.com/getPopularPosts',
    params: { sort: 'new' },
    headers: {
      'X-RapidAPI-Key': '71b9ec00cbmshfdf68f0e4808f8bp101991jsn2e0db990911a',
      'X-RapidAPI-Host': 'reddit34.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching data from Reddit API' });
  }
};