import { createSlice } from '@reduxjs/toolkit'

export const userLoginSlice = createSlice({
  name: 'userInfo',
  initialState: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
    error: null,
    loading: false
  },
  reducers: {
    user_login_request: (state, action) => {
      state.loading = true
      state.userInfo = null
    },
    user_login_success: (state, action) => {
      state.loading = false
      state.userInfo = action.payload
      state.error = null
    },
    user_login_fail: (state, action) => {
      state.loading = false
      state.error = action.payload
      state.userInfo = null
    },
    logout: (state, action) => {
      state.userInfo = null
    }
  }
})

export const {
  user_login_request,
  user_login_success,
  user_login_fail,
  logout
} = userLoginSlice.actions

export default userLoginSlice.reducer
