import { createSlice } from '@reduxjs/toolkit';

const initialState = {
count: 0
    // selectedProduct: null,
    // selectedProductForEdit: null
}

const countSlice = createSlice({
    name: "countShopping",
    initialState: initialState,
    reducers: {
        addCount: (state,action) => {
            state.count = state.count+action.payload;
            
          },
          removeCount: (state,action) =>{
            state.count = action.payload;
            
          },
        changeCount:(state,action)  =>{
          state.count = action.payload;
        }
          //,
        // selectProduct: (state, action) => {
        //     state.selectedProduct = action.payload;
        // },
        // selectProductForEdit: (state, action) => {
        //     state.selectedProductForEdit = action.payload
        // },
        // deleteCount: (state, action) => {
        //     state.count = state.count.
        // },
        // saveProduct: (state, action) => {
        //     state.selectedProductForEdit = null;
        //     state.shoppingProduct = state.shoppingProduct.map(item => {
        //         if (item.id !== action.payload.id)
        //             return item;
        //         return action.payload;
        //     })
        // }

    }
})

export const {addCount ,removeCount  ,changeCount } = countSlice.actions; 
export default countSlice.reducer;