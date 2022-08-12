import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import productSlice from './reducers/productReducers'
 
const store = configureStore({
    reducer: {
        productsList: productSlice
    },
    preloadedState: {},
    middleware: [thunk],
})
 
export default store