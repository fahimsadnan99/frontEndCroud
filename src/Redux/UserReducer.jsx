import { createSlice } from "@reduxjs/toolkit";

let UserReducer = createSlice({
  name: "user",
  initialState: {
    user: [],
  },
  reducers: {
    allUser(state, actions) {
      state.user = actions.payload;
    },
    assignUser(state, actions) {
      let newUser = {
        id: state.user.length + 1,
        name: actions.payload,
      };
      state.user = [...state.user, newUser];
    },
    deleteUser(state, actions) {
      let filterUser = state.user?.filter((item) => item.id !== actions.payload);
      state.user = filterUser;
    },
    updateUser(state, actions) {
      let updateUser = state.user?.findIndex((item) => item.id == actions.payload.id);

       state.user?.splice(updateUser, 1, actions.payload);
    
    },
  },
});

export const { allUser, assignUser, deleteUser, updateUser } = UserReducer.actions;
export default UserReducer.reducer;
