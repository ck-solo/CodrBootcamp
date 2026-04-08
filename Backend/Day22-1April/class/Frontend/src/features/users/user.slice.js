import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    followers: [],
    following: [],
    requested: [],
    followRequests: [],
  },
  reducers: {
    setFollowers: (state, action) => {
      state.followers = action.payload;
    },
    setFollowing: (state, action) => {
      state.following = action.payload;
    },
    setRequested: (state, action) => {
      state.requested = action.payload;
    },
    appendRequest: (state, action) => {
      state.requested = [...state.requested, action.payload];
    },
    setFollowRequests: (state, action) => {
      state.followRequests = action.payload;
    },
  },
});

export const {
  setFollowers,
  setFollowing,
  setRequested,
  appendRequest,
  setFollowRequests,
} = userSlice.actions;
export default userSlice.reducer;
