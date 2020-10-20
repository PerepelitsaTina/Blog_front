import axios from 'axios';

import config from 'config';

const axiosInstance = axios.create({
  baseURL: config.apiBaseUrl
});

axiosInstance.interceptors.request.use((request) => {
  if (!request.headers) {
    request.headers = {};
  }
  const token = localStorage.token;
  request.headers.authorization = `Bearer ${token}`;

  return request;
});

axiosInstance.interceptors.response.use(
  ({ data }) => {
    return data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axiosInstance;
