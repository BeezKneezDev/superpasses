import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : [],
    quantity: 0,

    total: 0
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1
      state.cartItems.push(action.payload)
      const adultTotal =
        action.payload.adultPrice * action.payload.adultQuantity
      const childTotal =
        action.payload.childPrice * action.payload.childQuantity
      state.total += adultTotal + childTotal
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },

    addAdultProductQuantity: (state, action) => {
      const product = state.cartItems.find(
        (product) => product._id === action.payload
      )
      product.adultQuantity++
      state.total += product.adultPrice
    },
    removeAdultProductQuantity: (state, action) => {
      const product = state.cartItems.find(
        (product) => product._id === action.payload
      )
      product.adultQuantity--
      state.total -= product.adultPrice
    },
    addChildProductQuantity: (state, action) => {
      const product = state.cartItems.find(
        (product) => product._id === action.payload
      )
      product.childQuantity++
      state.total += product.childPrice
    },
    removeChildProductQuantity: (state, action) => {
      const product = state.cartItems.find(
        (product) => product._id === action.payload
      )
      product.childQuantity--
      state.total -= product.childPrice
    },

    removeProduct: (state, action) => {
      const product = state.cartItems.find(
        (product) => product._id === action.payload
      )

      const adultTotal = product.adultPrice * product.adultQuantity
      const childTotal = product.childPrice * product.childQuantity
      const productTotalPrice = adultTotal + childTotal

      const removeProduct = state.cartItems.filter(
        (product) => product._id !== action.payload
      )
      state.cartItems = removeProduct
      state.quantity -= 1
      state.total -= productTotalPrice
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },

    clearCart: (state) => {
      state.cartItems = []
      state.quantity = 0
      state.total = 0
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    }
  }
})

export const {
  addProduct,
  addAdultProductQuantity,
  addChildProductQuantity,
  removeAdultProductQuantity,
  removeChildProductQuantity,
  removeProduct,
  clearCart
} = cartSlice.actions
export default cartSlice.reducer

// import { createSlice } from '@reduxjs/toolkit'

// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState: {
//     cartItems: localStorage.getItem('cartItems')
//       ? JSON.parse(localStorage.getItem('cartItems'))
//       : []
//   },
//   reducers: {
//     cart_addItem: (state, action) => {
//       const item = action.payload
//       const existItem = state.cartItems.find((x) => x.product === item.product)

//       // update this i think you can mutate state here using reduxtoolkit
//       if (existItem) {
//         return {
//           ...state,
//           cartItems: state.cartItems.map((x) =>
//             x.product === existItem.product ? item : x
//           )
//         }
//       } else {
//         return {
//           ...state,
//           cartItems: [...state.cartItems, item]
//         }
//       }
//     },
//     cart_removeItem: (state, action) => {
//       return {
//         ...state,
//         cartItems: state.cartItems.filter(
//           (cartItem) => cartItem.product !== action.payload
//         )
//       }
//     },
//     cart_save_shipping_address: (state, action) => {
//       return { ...state, shippingAddress: action.payload }
//     },
//     cart_save_payment_method: (state, action) => {
//       return { ...state, paymentMethod: action.payload }
//     }
//   }
// })

// export const {
//   cart_addItem,
//   cart_removeItem,
//   cart_save_shipping_address,
//   cart_save_payment_method
// } = cartSlice.actions

// export default cartSlice.reducer
