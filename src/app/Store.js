import { configureStore } from "@reduxjs/toolkit";
import CountSlice from "../features/product/CountSlice.js";
import ProductSlice from "../features/product/ProductSlice.js";
import UserSlice from "../features/user/UserSlice.js";


export const store = configureStore({
    reducer: {
        product: ProductSlice,
    countShopping: CountSlice,
    currentUser:UserSlice
    }
})