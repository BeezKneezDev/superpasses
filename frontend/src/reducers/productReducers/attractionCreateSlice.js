import { createSlice } from '@reduxjs/toolkit'

export const attractionCreateSlice = createSlice({
  name: 'attractionCreate',
  initialState: {},
  reducers: {
    attraction_create_request: (state, action) => {
      return { loading: true }
    },
    attraction_create_success: (state, action) => {
      return { loading: false, success: true, attraction: action.payload }
    },
    attraction_create_fail: (state, action) => {
      return { loading: false, error: action.payload }
    },
    attraction_create_reset: (state, action) => {
      return {}
    }
  }
})

export const {
  attraction_create_request,
  attraction_create_success,
  attraction_create_fail,
  attraction_create_reset
} = attractionCreateSlice.actions

export default attractionCreateSlice.reducer
