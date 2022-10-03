import Home from './screens/HomeScreen'
import Cart from './screens/CartScreen'
import Header from './components/Header'
import Footer from './components/Footer'
import Order from './screens/OrderScreen'
import Login from './screens/LoginScreen'
import { Container } from 'react-bootstrap'
import Users from './screens/UserListScreen'
import Profile from './screens/ProfileScreen'
import Payment from './screens/PaymentScreen'
import Product from './screens/ProductScreen'
import Register from './screens/RegisterScreen'
import Shipping from './screens/ShippingScreen'
import Orders from './screens/OrdersListScreen'
import EditUser from './screens/UserEditScreens'
import Products from './screens/ProductListScreen'
import PlaceOrder from './screens/PlaceOrderScreen'
import EditProduct from './screens/ProductEditScreen'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Navbar from './components/Navbar'

import Passes from './screens/PassesScreen'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className=''>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/search/:keyword' element={<Home />} />
          <Route path='/page/:pageNumber' element={<Home />} />
          <Route path='/search/:keyword/page/:pageNumber' element={<Home />} />

          <Route path='/passes' element={<Passes />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/placeorder' element={<PlaceOrder />} />
          <Route path='/order/:id' element={<Order />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/cart'>
            <Route path=':id' element={<Cart />} />
            <Route path='' element={<Cart />} />
          </Route>
          <Route path='/admin/orders' element={<Orders />} />
          <Route path='/admin/users' element={<Users />} />
          <Route path='/admin/user/:id/edit' element={<EditUser />} />
          <Route path='/admin/products' element={<Products />} />
          <Route path='/admin/products/:pageNumber' element={<Products />} />
          <Route path='/admin/product/:id/edit' element={<EditProduct />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
