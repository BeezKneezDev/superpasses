import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import productsReducer from './reducers/productReducers/productsSlice'
import productDetailReducer from './reducers/productReducers/productDetailsSlice'
import cartReducer from './reducers/cartReducers/cartSlice'

const store = configureStore({
  reducer: {
    productsList: productsReducer,
    productDetails: productDetailReducer,
    cart: cartReducer
  },
  preloadedState: {},
  middleware: [thunk]
})

export default store
