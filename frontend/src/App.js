import Home from './screens/HomeScreen'
import Cart from './screens/CartScreen'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './screens/LoginScreen'
import { Container } from 'react-bootstrap'
import Product from './screens/ProductScreen'
import Register from './screens/RegisterScreen'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/product/:id' element={<Product />} />
            <Route path='/cart'>
              <Route path=':id' element={<Cart />} />
              <Route path='' element={<Cart />} />
            </Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
