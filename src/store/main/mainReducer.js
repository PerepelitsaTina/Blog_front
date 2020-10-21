import { createSlice } from '@reduxjs/toolkit';

const getInitialState = () => ({
  user: null
});

const mainReducer = createSlice({
  name: 'main',
  initialState: getInitialState(),
  reducers: {
    updateUser: (store, { payload }) => {
      console.log(payload);
      return {
        ...store,
        user: payload
      }
    },
  }
});

export const {
  updateUser
} = mainReducer.actions;

export default mainReducer.reducer;
