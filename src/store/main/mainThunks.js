import authApi from 'api/authApi';
import { updateUser } from './mainReducer';
import jwtToken from '../../utils/token';
import userApi from 'api/userApi';

export const registerUser = (newUser) => {
  return async (dispatch) => {
    try {
      const { user, token } = await authApi.register(newUser);
      jwtToken.set(token);
      dispatch(updateUser(user));
    } catch (err) {
      console.log(err);
    }
  };
};

export const loginUser = (newUser) => {
  return async (dispatch) => {
    try {
      const { user, token } = await authApi.login(newUser);
      jwtToken.set(token);
      dispatch(updateUser(user));
    } catch (err) {
      console.log(err);
    }
  };
};

export const logoutUser = () => {
  return async (dispatch) => {
    try {
      jwtToken.remove();
      dispatch(updateUser(null));
    } catch (err) {
      console.log(err);
    }
  };
};

export const authorizeThunk = () => {
  return async (dispatch) => {
    try {
      const token = jwtToken.get();
      if (!token) { return; }

      const user = await authApi.me();
      dispatch(updateUser(user));
    } catch (err) {
      console.log(err);
    }
  };
};

export const editUserThunk = (newData, userId) => {
  return async (dispatch) => {
    try {
      console.log(newData, userId);
      const user = await userApi.edit(newData, userId);
      dispatch(updateUser(user));
    } catch (err) {
      console.log(err);
    }
  };
};

export const getUserList = () => {
  return async () => {
    try {
      const users = await userApi.getList();
      return users;
    } catch (err) {
      console.log(err);
    }
  };
};

export const getOneUser = (id) => {
  return async (id) => {
    try {
      const user = await userApi.getOne(id);
      return user;
    } catch (err) {
      console.log(err);
    }
  };
};
