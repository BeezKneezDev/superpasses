import axios from 'axios'
import {
  user_login_request,
  user_login_success,
  user_login_fail,
  logout as logoutSlice
} from '../reducers/userReducers/userLoginSlice'
import {
  user_register_request,
  user_register_success,
  user_register_fail
} from '../reducers/userReducers/userRegisterSlice'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(user_login_request())

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    )

    dispatch(user_login_success(data))
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message
    dispatch(user_login_fail(error))
  }
}

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch(user_register_request())

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const { data } = await axios.post(
      '/api/users',
      { name, email, password },
      config
    )

    dispatch(user_register_success())
    dispatch(user_login_success(data))
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (err) {
    const error =
      err.response && err.response.data.message
        ? err.response.data.message
        : err.message
    dispatch(user_register_fail(error))
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch(logoutSlice())
}
