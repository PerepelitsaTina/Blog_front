import { connect } from "react-redux";

export const setToLocalStorage = (key, data) => {
  localStorage.setItem(key, data);
};

export const connectionWithUser = connect(
  (state) => ({
    user: state.main.user
  })
);