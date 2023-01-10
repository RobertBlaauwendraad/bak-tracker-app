import axios from "axios";

const headers = {
  'Content-Type': 'application/json'
};

// const apiUrl = process.env.VUE_APP_API_URL || 'http://baktracker.local';
// const apiUrl = process.env.VUE_APP_API_URL || 'http://localhost:3000';

export default axios.create({
  // baseURL: apiUrl + '/api/v1',
  timeout: 30000,
  headers
});