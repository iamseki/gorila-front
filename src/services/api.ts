import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NODE_ENV == "development" ? 'http://localhost:8080' : "https://gorila-challenge-api.herokuapp.com",
});

export default api;
