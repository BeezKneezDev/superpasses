import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cartReducers/cartSlice'

import userLoginReducer from './reducers/userReducers/userLoginSlice'
import userRegisterReduducer from './reducers/userReducers/userRegisterSlice'
import userDetailsReducer from './reducers/userReducers/userDetailsSlice'
import userListReducer from './reducers/userReducers/userListSlice'
import userDeleteSlice from './reducers/userReducers/userDeleteSlice'
import userUpdateSlice from './reducers/userReducers/userUpdateSlice'

import productsReducer from './reducers/productReducers/productsSlice'
import productDeleteReducer from './reducers/productReducers/productDeleteSlice'
import productDetailReducer from './reducers/productReducers/productDetailsSlice'
import productCreateReducer from './reducers/productReducers/productCreateSlice'

import orderCreateReducer from './reducers/orderReducers/orderCreateSlice'
import orderDetailsReducer from './reducers/orderReducers/orderDetailsSlice'
import orderPayReducer from './reducers/orderReducers/orderPaySlice'
import orderDeliverReducer from './reducers/orderReducers/orderDeliverSlice'
import orderListMyReducer from './reducers/orderReducers/orderListMySlice'
import orderListReducer from './reducers/orderReducers/orderListSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,

    userList: userListReducer,
    userLogin: userLoginReducer,
    userDelete: userDeleteSlice,
    userUpdate: userUpdateSlice,
    userDetails: userDetailsReducer,
    userRegister: userRegisterReduducer,

    productList: productsReducer,
    productsList: productsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productDetails: productDetailReducer,

    orderPay: orderPayReducer,
    orderList: orderListReducer,
    orderListMy: orderListMyReducer,
    orderCreate: orderCreateReducer,
    orderDeliver: orderDeliverReducer,
    orderDetails: orderDetailsReducer
  },
  preloadedState: {},
  middleware: [thunk]
})

export default store
