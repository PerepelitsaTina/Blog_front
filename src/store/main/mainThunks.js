import authApi from 'api/authApi';
import localStorage from 'redux-persist/es/storage';
import {updateUser} from './mainReducer';

export const registerUser = (newUser) => {
  return async (dispatch) => {
    try {
      const { user, token } = await authApi.register(newUser);
      localStorage.setItem("token", token);
      dispatch(updateUser(user));
    } catch (err) {
      console.log(err);
    }
  };
};
