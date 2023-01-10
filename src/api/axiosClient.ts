import axios from 'axios';
import queryString from 'query-string';

const baseURL = 'https://reqres.in/api';

const axiosClient = axios.create({
  baseURL,
  paramsSerializer: {
    serialize: params => queryString.stringify({ params }),
  },
});

axiosClient.interceptors.request.use(async config => {
  return {
    ...config,
    headers: {
      'Content-Type': 'application/json',
    },
  };
});

axiosClient.interceptors.response.use(
  response => {
    if (response && response.data) return response.data;
    return response;
  },
  err => {
    throw err.response.data;
  }
);

export default axiosClient;
