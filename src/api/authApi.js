import axios from './axios';

const path = '/auth/register';

const register = (data) => {
  return axios.post(path, data);
};

export default { register };
