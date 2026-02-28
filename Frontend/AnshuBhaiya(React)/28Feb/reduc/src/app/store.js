import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlic";
import productReducer from "../features/product/ProductSlic";
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        product: productReducer,
    }
})
