import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cartReducers/cartSlice'

import userListReducer from './reducers/userReducers/userListSlice'
import userDeleteSlice from './reducers/userReducers/userDeleteSlice'
import userUpdateSlice from './reducers/userReducers/userUpdateSlice'
import userLoginReducer from './reducers/userReducers/userLoginSlice'
import userDetailsReducer from './reducers/userReducers/userDetailsSlice'
import userRegisterReduducer from './reducers/userReducers/userRegisterSlice'
import userUpdateProfileReduducer from './reducers/userReducers/userUpdateProfileSlice'

import productsReducer from './reducers/productReducers/productsSlice'
import superPassesReducer from './reducers/productReducers/superPasses'
import productCreateReducer from './reducers/productReducers/productCreateSlice'
import productDeleteReducer from './reducers/productReducers/productDeleteSlice'
import productUpdateReducer from './reducers/productReducers/productUpdateSlice'
import productDetailReducer from './reducers/productReducers/productDetailsSlice'

import productsByAttractionReducer from './reducers/productReducers/productsByAttractions'

import attractionsReducer from './reducers/productReducers/attractionsSlice'

import orderPayReducer from './reducers/orderReducers/orderPaySlice'
import orderListReducer from './reducers/orderReducers/orderListSlice'
import orderListMyReducer from './reducers/orderReducers/orderListMySlice'
import orderCreateReducer from './reducers/orderReducers/orderCreateSlice'
import orderDeliverReducer from './reducers/orderReducers/orderDeliverSlice'
import orderDetailsReducer from './reducers/orderReducers/orderDetailsSlice'

const store = configureStore({
  reducer: {
    cart: cartReducer,

    userList: userListReducer,
    userLogin: userLoginReducer,
    userDelete: userDeleteSlice,
    userUpdate: userUpdateSlice,
    userDetails: userDetailsReducer,
    userRegister: userRegisterReduducer,
    userUpdateProfile: userUpdateProfileReduducer,

    productList: productsReducer,
    productsList: productsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productDetail: productDetailReducer,
    productUpdate: productUpdateReducer,
    superpassesList: superPassesReducer,
    productDetails: productDetailReducer,

    attractionsList: attractionsReducer,
    productsByAttractionList: productsByAttractionReducer,

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
