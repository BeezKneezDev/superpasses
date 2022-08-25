import { createSlice } from '@reduxjs/toolkit'

export const userRegisterSlice = createSlice({
  name: 'userRegister',
  initialState: {
    error: null,
    loading: false
  },
  reducers: {
    user_register_request: (state, action) => {
      state.loading = true
    },
    user_register_success: (state, action) => {
      state.loading = false
      state.error = null
    },
    user_register_fail: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {
  user_register_request,
  user_register_success,
  user_register_fail
} = userRegisterSlice.actions

export default userRegisterSlice.reducer
