import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      id: null,
      username: "",
      email: "",
      name: "",
      userRole: "",
      jwt: ""
    },
  },
  reducers: {
    changeUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

const { changeUser } = userSlice.actions;

const selectUser = (state) => state.user.value;

export { userSlice, changeUser, selectUser };
export default userSlice.reducer;
