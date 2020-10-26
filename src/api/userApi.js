import axios from './axios';

const path = '/user';

const getOne = (id) => {
  return axios.get(`${path}/${id}`);
};

/**
 * @param {{
 *    limit: number
 * }} params
 */
const getList = () => {
  return axios.get(`${path}/list`);
};

const create = (data) => {
  return axios.post(path, data);
};

const edit = (data, id) => {
  return axios.patch(`${path}/${id}`, data);
}

const deleteUser = (id) => {
  return axios.delete(`${path}/${id}`);
}

export default { getOne, getList, create, edit, deleteUser };
