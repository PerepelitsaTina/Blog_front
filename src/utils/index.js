import {
  connect
} from "react-redux";
import {
  updateUser
} from '../store/main/mainReducer';

export const setToLocalStorage = (key, data) => {
  localStorage.setItem(key, data);
};

export const connectionWithUser = connect(
  (state) => ({
    user: state.main.user
  }), {
    updateUser
  }
);