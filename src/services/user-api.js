import axios from 'axios';

axios.defaults.baseURL = 'https://645941e14eb3f674df8b9d70.mockapi.io/api/v1';

export async function fetchTweets(page = 1) {
  const params = new URLSearchParams({
    page,
    limit: 3,
  });

  const { data } = await axios.get(`/users?${params}`);

  return data;
}

export async function updateTweets(id, credentials) {
  const { data } = await axios.patch(`/users/${id}}`, credentials);

  return data;
}
