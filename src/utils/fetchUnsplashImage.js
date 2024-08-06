// src/utils/fetchUnsplashImage.js
const fetchUnsplashImage = async (query) => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=airline+${query}&per_page=1`,
      {
        headers: {
          Authorization: `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    if (data.results && data.results.length > 0) {
      return data.results[0].urls.small;
    }
  } catch (error) {
    console.error('Error fetching image from Unsplash:', error);
  }
  return 'https://source.unsplash.com/1600x900/?airplane'; // Fallback image
};

export default fetchUnsplashImage;
