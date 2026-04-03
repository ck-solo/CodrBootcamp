import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: [],
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: "users",
    initialState:{
        followers:[],
        following: [],
        requested:[]

    },
    reducers: {
         setFollowers: (state, action) => {
            state.followers = action.payload
        },
        setFollowing: (state, action) => {
            state.following = action.payload
        },
        setRequested: (state, action) => {
            state.requested = action.payload
        },
        appendRequest: (state, action) => {
            state.requested = [ ...state.requested, action.payload ]
        }

    }
})

export const { setFollowers, setFollowing, setRequested, appendRequest } = userSlice.actions
export default userSlice.reducer