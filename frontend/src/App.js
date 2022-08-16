import { Container } from 'react-bootstrap'
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './screens/HomeScreen';
import Product from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route exact  path='/' element={<Home />} />
              <Route path='/product/:id' element={<Product />} />
              <Route path='/cart'>
                <Route path=':id' element={<CartScreen />} />
                <Route path='' element={<CartScreen />} />
              </Route>
            </Routes>
          </Container>
        </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
