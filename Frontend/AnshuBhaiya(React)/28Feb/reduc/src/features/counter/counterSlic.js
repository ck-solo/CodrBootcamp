import { createSlice } from '@reduxjs/toolkit'

const init = {
    value: 0,
}

const counterSlice = createSlice({
    name: "counter",
    initialState: init,
    reducers:{
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        reset : (state) =>{
            state.value = 0
        },
         addbyamount : (state, action) => {
            state.value += action.payload
         }
        

    }
})

export const { increment, decrement, reset, addbyamount } = counterSlice.actions
export default counterSlice.reducer