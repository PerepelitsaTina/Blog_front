import { combineReducers } from "@reduxjs/toolkit";

import mainReducer from "./main/mainReducer"

export const rootReducer = combineReducers({
  main: mainReducer
});

