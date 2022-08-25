import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cartReducers/cartSlice'
import userLoginReducer from './reducers/userReducers/userLoginSlice'
import userRegisterReduducer from './reducers/userReducers/userRegisterSlice'
import productsReducer from './reducers/productReducers/productsSlice'
import productDetailReducer from './reducers/productReducers/productDetailsSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,
    userLogin: userLoginReducer,
    productsList: productsReducer,
    userRegister: userRegisterReduducer,
    productDetails: productDetailReducer
  },
  preloadedState: {},
  middleware: [thunk]
})

export default store
