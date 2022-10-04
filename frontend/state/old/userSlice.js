import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		value: JSON.parse(localStorage.getItem('user')) || {
			id: '',
			name: '',
			email: '',
			age: 0
		}
	},
	reducers: {
		changeUser: (state, action) => {
			state.value = action.payload;
		}
	}
});

const { changeUser } = userSlice.actions;

const selectUser = state => state.user.value;

export { userSlice, changeUser, selectUser };
export default userSlice.reducer;

/*import { createSlice } from '@reduxjs/toolkit'

const userslice= createSlice({
name:"icon",
initialState:{
    icon:'moon'
},
reducers:{
    iconMoon:state=>{
        state.icon= 'moon'
    },
    iconSun:state=>{
        state.icon= 'sun'
    },
}
})

export default iconslice

export const iconAction = iconslice.actions
/*

import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: JSON.parse(
      localStorage.getItem("user") || {
        id: null,
        username: "",
        email: "",
        userRole: "",
      }
    ),
  },
  reducers: {
    changeUser: (state, action) => (state.value = action.payload),
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.auth,
        };
      },
    },
  },
});

const { changeUser } = userSlice.actions;
const selectUser = (state) => state.user.value;

export { userSlice, changeUser, selectUser };
export default userSlice.reducer;*/
// 