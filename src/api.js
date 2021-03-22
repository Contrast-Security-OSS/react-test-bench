import axios from 'axios';

const {
  REACT_APP_SERVER_HOST = document.location.hostname || 'localhost',
  REACT_APP_SERVER_PORT = '3001',
} = process.env;

const baseURL = `//${REACT_APP_SERVER_HOST}:${REACT_APP_SERVER_PORT}`;

const client = axios.create({ baseURL, timeout: 2000 });

export default client;
