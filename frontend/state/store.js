/*import { configureStore } from "@reduxjs/toolkit";
import userslice from "./userSlice";

const store = configureStore({
    reducer: {
      user: userslice.reducer,
    },
});

export default store*/

import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

export default configureStore({
	reducer: {
		user: userReducer
	}
});

/*
import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import userReducer from "./userSlice";

const makeStore = () => {
  configureStore({
    reducer: {
      user: userReducer,
    },
  });
};
export const wrapper = createWrapper(makeStore);
*/