import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  username: string;
  email: string;
}

const initialState: UserState = {
  username: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action: PayloadAction<UserState>) {
      state.username = action.payload.username;
      state.email = action.payload.email;
    },
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;