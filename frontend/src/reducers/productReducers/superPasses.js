import { createSlice } from '@reduxjs/toolkit'

export const superPassesSlice = createSlice({
  name: 'superPasses',
  initialState: {
    products: []
  },
  reducers: {
    superpasses_request: (state, action) => {
      return { loading: true, products: [] }
    },
    superpasses_success: (state, action) => {
      return { loading: false, products: action.payload }
    },
    superpasses_fail: (state, action) => {
      return { loading: false, error: action.payload }
    }
  }
})

export const { superpasses_request, superpasses_success, superpasses_fail } =
  superPassesSlice.actions

export default superPassesSlice.reducer
