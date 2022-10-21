import { Link, useParams, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'
import {
  Container,
  Col,
  Row,
  ListGroup,
  Form,
  Button,
  Card,
  Image
} from 'react-bootstrap'
import Hero from '../components/Hero'

import {
  addAdultProductQuantity,
  addChildProductQuantity,
  removeAdultProductQuantity,
  removeChildProductQuantity,
  removeProduct
} from '../reducers/cartReducers/cartSlice'

const CartScreen = () => {
  const cart = useSelector((state) => state.cart)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const checkoutHandler = () => {
    navigate(`/login?redirect=${'/shipping'}`)
  }

  return (
    <>
      <Hero />
      <Container className='pt-20'>
        <Row>
          <Col md={8}>
            {cart.cartItems.length === 0 ? (
              <Message>
                Your cart is empty <Link to='/passes'>Go Back</Link>
              </Message>
            ) : (
              <>
                {cart.cartItems.map((item) => (
                  <div className='flex pb-5'>
                    <div className=' w-2/5'>
                      <Image src={item.image} alt={item.name} fluid />
                    </div>
                    <div className=' w-3/5 px-4 flex flex-col '>
                      <div>
                        <h4 className='primary-font text-3xl text-brand'>
                          {item.name}
                        </h4>
                      </div>
                      <div>
                        {/* Adult Counter */}
                        <div className='flex justify-between items-center pt-3'>
                          <div class='custom-number-input h-10 w-32'>
                            <div class='flex flex-row h-10 w-full  relative bg-transparent mt-1'>
                              <button
                                class=' bg-gray-300 text-white hover:text-gray-700 hover:bg-gray-400 h-full w-20  cursor-pointer outline-none'
                                onClick={() =>
                                  item.adultQuantity > 1 &&
                                  dispatch(removeAdultProductQuantity(item._id))
                                }
                              >
                                <span class='m-auto text-2xl font-thin'>-</span>
                              </button>
                              <div class='text-center px-3 bg-[#ddd] font-semibold text-md md:text-basecursor-default flex items-center text-gray-700 '>
                                <div>{item.adultQuantity}</div>
                              </div>
                              <button
                                class='bg-gray-300 text-white hover:text-gray-700 hover:bg-gray-400 h-full w-20  cursor-pointer'
                                onClick={() =>
                                  dispatch(addAdultProductQuantity(item._id))
                                }
                              >
                                <span class='m-auto text-2xl font-thin'>+</span>
                              </button>
                            </div>
                          </div>
                          {/* pass name */}
                          <div>Adult Pass</div>
                          {/* pass price  */}
                          <div>${item.adultPrice * item.adultQuantity}</div>
                        </div>

                        {/* Child */}

                        <div className='flex justify-between items-center pt-3'>
                          <div class='custom-number-input h-10 w-32'>
                            <div class='flex flex-row h-10 w-full  relative bg-transparent mt-1'>
                              <button
                                class=' bg-gray-300 text-white hover:text-gray-700 hover:bg-gray-400 h-full w-20  cursor-pointer outline-none'
                                onClick={() =>
                                  item.childQuantity > 1 &&
                                  dispatch(removeChildProductQuantity(item._id))
                                }
                              >
                                <span class='m-auto text-2xl font-thin'>-</span>
                              </button>
                              <div class='text-center px-3 bg-[#ddd] font-semibold text-md md:text-basecursor-default flex items-center text-gray-700 '>
                                <div>{item.childQuantity}</div>
                              </div>
                              <button
                                class='bg-gray-300 text-white hover:text-gray-700 hover:bg-gray-400 h-full w-20  cursor-pointer'
                                onClick={() =>
                                  dispatch(addChildProductQuantity(item._id))
                                }
                              >
                                <span class='m-auto text-2xl font-thin'>+</span>
                              </button>
                            </div>
                          </div>
                          {/* pass name */}
                          <div>Child Pass</div>
                          {/* pass price  */}
                          <div>${item.childPrice * item.childQuantity}</div>
                        </div>
                      </div>

                      <div
                        className='mt-auto self-end'
                        onClick={() => dispatch(removeProduct(item._id))}
                      >
                        <div className=' text-right'>
                          <Button>Remove</Button>
                          <div className='pt-2'>
                            <h4>
                              Pass Total $
                              {item.adultPrice * item.adultQuantity +
                                item.childPrice * item.childQuantity}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant='flush'>
                <h2 className='p-3'>Passes</h2>
                {cart.cartItems.map((item) => (
                  <div className='p-3'>
                    <h5>{item.name}</h5>
                    <div>Adult x {item.adultQuantity}</div>
                    <div>Child x {item.childQuantity}</div>
                    <div>
                      ${' '}
                      {item.adultPrice * item.adultQuantity +
                        item.childPrice * item.childQuantity}
                    </div>
                  </div>
                ))}
                <ListGroup.Item>
                  <h2>
                    Total Passes (
                    {cart.cartItems.reduce(
                      (acc, item) =>
                        acc + item.adultQuantity + item.childQuantity,
                      0
                    )}
                    )
                  </h2>
                  <h3>Total: ${cart.total}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    type='button'
                    className='btn-block'
                    disabled={cart.quantity === 0}
                    onClick={checkoutHandler}
                  >
                    Proceed To Checkout
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CartScreen
