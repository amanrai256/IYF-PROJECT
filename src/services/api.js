import axios from 'axios';

// You might store your backend URL in an .env file
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_BASE_URL,
  // You can set headers here if needed
});

// Optionally attach interceptors for auth tokens
api.interceptors.request.use((config) => {
  const storedUser = localStorage.getItem('app_user');
  if (storedUser) {
    const user = JSON.parse(storedUser);
    // if you have a token, attach to headers
    // config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
