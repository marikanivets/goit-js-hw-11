import axios from 'axios';

const BASE_URL = 'https://pixabay.com';
const API_KEY = '57047547-298494e8ebb846c0ca69ab507'; 

export function getImagesByQuery(query) {
  const searchParams = {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  };

  return axios.get(`${BASE_URL}/api/`, searchParams)
    .then(response => {
      return response.data;
    });
}
