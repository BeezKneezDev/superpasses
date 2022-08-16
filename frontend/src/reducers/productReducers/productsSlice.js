import { createSlice } from "@reduxjs/toolkit";

export const productListSlice = createSlice({
    name: 'products',
    initialState: {
      products: []
    },
    reducers: {
      products_request: (state, action) => {
        return { loading: true, products: [] }
      },
      products_success: (state, action) => {
        return { loading: false, products: action.payload }
      },
      products_fail: (state, action) => {
        return { loading: false, error: action.payload }
      }
    }
  })
   
  export const {products_request, products_success, products_fail} = productListSlice.actions
   
  export default productListSlice.reducer