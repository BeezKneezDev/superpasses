import axios from 'axios'

import {
  attractions_list_request,
  attractions_list_success,
  attractions_list_fail
} from '../reducers/productReducers/attractionsSlice'
// import {
//   attraction_create_fail,
//   attraction_create_request,
//   attraction_create_success
// } from '../reducers/productReducers/attractionCreateSlice'

export const listAttractions =
  (activity = '') =>
  async (dispatch, getState) => {
    try {
      dispatch(attractions_list_request())

      const { data } = await axios.get(`/api/attractions?activity=${activity}`)

      dispatch(attractions_list_success(data))
    } catch (err) {
      const error =
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      dispatch(attractions_list_fail(error))
    }
  }

// export const createAttraction = () => async (dispatch, getState) => {
//   try {
//     dispatch(attraction_create_request())

//     const {
//       userLogin: { userInfo }
//     } = getState()

//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${userInfo.token}`
//       }
//     }

//     const { data } = await axios.post(`/api/attractions/`, {}, config)
//     dispatch(attraction_create_success(data))
//   } catch (err) {
//     const error =
//       err.response && err.response.data.message
//         ? err.response.data.message
//         : err.message
//     dispatch(attraction_create_fail(error))
//   }
// }
