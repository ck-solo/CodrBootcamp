import { createSlice } from "@reduxjs/toolkit";

const intiStore = {
    products: [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Phone", price: 500 },
        { id: 3, name: "Tablet", price: 300 },
    ],
}

const productSlice = createSlice({
    name: "product",
    initialState: intiStore,   
    reducers: {
        addProduct: (state) => {
            state.products.push({name: "Headphones", price: 200}) 
        },
        removeProduct: (state) => {
            state.products.pop()
        },
    }
})
export const {addProduct, removeProduct} = productSlice.actions
export default productSlice.reducer