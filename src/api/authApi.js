import axios from './axios';

const regPath = '/auth/register';
const loginPath = '/auth/login';
const mePath = '/auth/me';

const register = (data) => {
  return axios.post(regPath, data);
};

const login = (data) => {
  return axios.post(loginPath, data);
};

const me = () => {
  return axios.get(mePath)
}

export default { register, login, me };
