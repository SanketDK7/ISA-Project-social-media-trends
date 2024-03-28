const axios = require('axios');

// Function to fetch popular videos from YouTube
async function fetchPopularVideos(apiKey, regionCode, videoCategoryId) {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
      params: {
        key: apiKey,
        chart: 'mostPopular',
        regionCode: regionCode, // Optional: Specify region code (e.g., 'US' for United States)
        videoCategoryId: videoCategoryId, // Optional: Specify video category ID
        part: 'snippet,contentDetails,statistics',
        maxResults: 10, // Number of videos to fetch
        // Additional parameters can be added as needed
      }
    });

    // Extract relevant data from API response
    const videos = response.data.items.map(item => ({
      videoId: item.id,
      title: item.snippet.title,
      channelId: item.snippet.channelId,
      channelTitle: item.snippet.channelTitle,
      viewCount: item.statistics.viewCount,
      // Add more fields as needed
    }));

    return videos;
  } catch (error) {
    console.error('Error fetching popular videos:', error);
    throw error;
  }
}

// Example usage: Fetch popular videos
const apiKey = 'AIzaSyDGAv6ldzEjEr_PvnF_wfiRqiH9_u_4BCQ';
const regionCode = 'IN'; // Example: Fetch popular videos in the United States
const videoCategoryId = '10'; 
fetchPopularVideos(apiKey, regionCode, videoCategoryId)
  .then(videos => {
    console.log('Popular videos:', videos);
  })
  .catch(error => {
    console.error('Error:', error);
  });


  module.exports = { fetchPopularVideos }; 
