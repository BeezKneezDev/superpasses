import { createSlice } from '@reduxjs/toolkit'

export const attractionListSlice = createSlice({
  name: 'attractions',
  initialState: {
    attractions: []
  },
  reducers: {
    attractions_list_request: (state, action) => {
      return { loading: true, attractions: [] }
    },
    attractions_list_success: (state, action) => {
      return {
        loading: false,
        attractions: action.payload
      }
    },
    attractions_list_fail: (state, action) => {
      return { loading: false, error: action.payload }
    }
  }
})

export const {
  attractions_list_request,
  attractions_list_success,
  attractions_list_fail
} = attractionListSlice.actions

export default attractionListSlice.reducer
