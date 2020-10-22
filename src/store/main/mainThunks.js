import authApi from 'api/authApi';
import { updateUser } from './mainReducer';
import jwtToken from '../../utils/token';

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

export const authorizeThunk = () => {
  return async (dispatch) => {
    try {
      const token = jwtToken.get();
      if (token) {
        const user = await authApi.me();
        dispatch(updateUser(user));
      } 
    } catch (err) {
      console.log(err);
    }
  };
};
