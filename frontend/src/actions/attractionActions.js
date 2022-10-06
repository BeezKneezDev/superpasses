import axios from 'axios'

import {
  attractions_list_request,
  attractions_list_success,
  attractions_list_fail
} from '../reducers/productReducers/attractionsSlice'

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
