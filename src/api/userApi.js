import axios from './axios';

const path = '/user';

export const getOne = (id) => {
  return axios.get(`${path}/${id}`);
};

/**
 * @param {{
 *    limit: number
 * }} params
 */
export const getList = (params) => {
  return axios.get(path, { params });
};

export const create = (data) => {
  return axios.post(path, data);
};

export default { getOne, getList, create };
