import axios from "axios";

const headers = {
  'Content-Type': 'application/json'
};

const apiUrl = process.env.VUE_APP_API_URL || 'http://baktracker.local';

export default axios.create({
  baseURL: apiUrl,
  timeout: 30000,
  headers
});