import axios from './axios';

const regPath = '/auth/register';
const loginPath = '/auth/login';

const register = (data) => {
  return axios.post(regPath, data);
};

const login = (data) => {
  return axios.post(loginPath, data);
};


export default { register, login };
