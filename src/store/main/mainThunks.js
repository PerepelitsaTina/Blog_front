import authApi from 'api/authApi';
import { updateUser } from './mainReducer';
import { setToLocalStorage } from '../../utils'

export const registerUser = (newUser) => {
  return async (dispatch) => {
    try {
      const { user, token } = await authApi.register(newUser);
      setToLocalStorage("token", token);
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
      setToLocalStorage("token", token);
      dispatch(updateUser(user));
    } catch (err) {
      console.log(err);
    }
  };
};
