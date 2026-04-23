import { createSlice } from "@reduxjs/toolkit"

const postSlice = createSlice({
    name:"posts",
    initialState:{
        posts:[],
        loading:false,
        error:null
    },
    reducers:{
        setPosts:(state, action)=>{
            state.posts = action.payload
        },
        updatePost:(state, action)=>{
            const updatedPost = action.payload;
            state.posts = state.posts.map(post => 
                post._id === updatedPost._id ? updatedPost : post
            )
        }
        
    }
})


export const { setPosts, updatePost } = postSlice.actions
export default postSlice.reducer