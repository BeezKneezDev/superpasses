import { createSlice } from '@reduxjs/toolkit'

export const productsByAttractionSlice = createSlice({
  name: 'productsByAttraction',
  initialState: {
    products: []
  },
  reducers: {
    products_by_attraction_request: (state, action) => {
      return { loading: true, products: [] }
    },
    products_by_attraction_success: (state, action) => {
      return { loading: false, products: action.payload }
    },
    products_by_attraction_fail: (state, action) => {
      return { loading: false, error: action.payload }
    }
  }
})

export const {
  products_by_attraction_request,
  products_by_attraction_success,
  products_by_attraction_fail
} = productsByAttractionSlice.actions

export default productsByAttractionSlice.reducer
