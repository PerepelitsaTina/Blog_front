import axios from 'axios';

import config from 'config';
import token from 'utils/token';

const axiosInstance = axios.create({
  baseURL: config.apiBaseUrl
});

axiosInstance.interceptors.request.use((request) => {
  if (!request.headers) {
    request.headers = {};
  }
  const jwtToken = token.get();
  request.headers.authorization = `Bearer ${jwtToken}`;

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
