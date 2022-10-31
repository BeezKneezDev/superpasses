import Home from './screens/HomeScreen'
import Cart from './screens/CartScreen'

import Footer from './components/Footer'
import Order from './screens/OrderScreen'
import Login from './screens/LoginScreen'

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

import Faqs from './screens/Faqs'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Navbar from './components/Navbar'

import Passes from './screens/PassesScreen'
import Rotorua from './screens/Rotorua'
import Taupo from './screens/Taupo'
import Contact from './screens/Contact'

import Attraction from './screens/AttractionScreen'

import Test from './screens/Test'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className=''>
        <Routes>
          <Route path='/test' element={<Test />} />
          <Route exact path='/' element={<Home />} />
          <Route path='/frequently-asked-questions' element={<Faqs />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/passes/' element={<Passes />} />
          <Route path='/attraction/:slug' element={<Attraction />} />
          <Route path='/search/:keyword' element={<Passes />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/shipping' element={<Shipping />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/placeorder' element={<PlaceOrder />} />
          <Route path='/order/:id' element={<Order />} />
          <Route path='/product/:slug' element={<Product />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/rotorua' element={<Rotorua />} />
          <Route path='/taupo' element={<Taupo />} />
          <Route path='/cart'>
            <Route path=':id' element={<Cart />} />
            <Route path='' element={<Cart />} />
          </Route>
          <Route path='/admin/orders' element={<Orders />} />
          <Route path='/admin/users' element={<Users />} />
          <Route path='/admin/user/:id/edit' element={<EditUser />} />
          <Route path='/admin/products' element={<Products />} />
          <Route path='/admin/products/:pageNumber' element={<Products />} />
          <Route path='/admin/product/:slug/edit' element={<EditProduct />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
