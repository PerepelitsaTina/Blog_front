import axios from './axios';

const loginPath = '/auth/login';
const mePath = '/auth/me';
const path = '/auth';

const register = (data) => {
  return axios.post(`${path}/register`, data);
};

const login = (data) => {
  return axios.post(loginPath, data);
};

const me = () => {
  return axios.get(mePath)
}

export default { register, login, me };
