import axios from 'axios';

const BASE_URL = 'https://pixabay.com';
const API_KEY = '45107981-dff19ea646be9441113540a97'; 

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

  return axios.get(BASE_URL, searchParams)
    .then(response => {
      return response.data;
    });
}
