import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
  getCurrentUser: () => api.get('/auth/me'),
};

// Heritage API
export const heritageAPI = {
  getAll: () => api.get('/heritage'),
  getCrafts: () => api.get('/crafts'),
};

// Marketplace API
export const marketplaceAPI = {
  getAll: () => api.get('/marketplace'),
};

// Bookmarks API
export const bookmarksAPI = {
  getAll: () => api.get('/bookmarks'),
  add: (data) => api.post('/bookmarks/add', data),
  remove: (data) => api.post('/bookmarks/remove', data),
};

// Itinerary API
export const itineraryAPI = {
  generate: (data) => api.post('/itinerary/generate', data),
  save: (data) => api.post('/itinerary/save', data),
  getAll: () => api.get('/itinerary'),
};

export default api;
