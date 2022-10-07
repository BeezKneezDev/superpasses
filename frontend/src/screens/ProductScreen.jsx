import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Meta from '../components/Meta'
import Hero from '../components/Hero'

import { addProduct } from '../reducers/cartReducers/cartSlice'
import Counter from './../components/Counter'
import Product from './../components/Product'

const ProductScreen = () => {
  const [qty, setQty] = useState(1)

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productDetails = useSelector((state) => state.productDetail)
  const { loading, error, product, products } = productDetails

  const { id } = useParams()
  const navigate = useNavigate()

  const [adultQuantity, setAdultQuantity] = useState(1)
  const [childQuantity, setChildQuantity] = useState(0)

  useEffect(() => {
    dispatch(listProductDetails(id))
  }, [dispatch, id])

  const handleAdultQuantity = (type) => {
    type === 'dec'
      ? adultQuantity > 1 && setAdultQuantity(adultQuantity - 1)
      : setAdultQuantity(adultQuantity + 1)
  }

  const handleChildQuantity = (type) => {
    type === 'dec'
      ? childQuantity > 0 && setChildQuantity(childQuantity - 1)
      : setChildQuantity(childQuantity + 1)
  }

  const addToCartHandler = () => {
    dispatch(addProduct({ ...product, adultQuantity, childQuantity }))
  }

  return (
    <>
      <Meta title={product.name} />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          {/* hero */}
          <Hero />
          <Container className='pt-10'>
            <Link className='btn bg-brand text-white my-3' to='/passes'>
              Go back
            </Link>
            <Row className=''>
              <Col md={6}>
                <Image src={product.image} alt={product.name} fluid />
              </Col>
              <Col md={6}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <h3>{product.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <p className='text-lg'>{product.summary}</p>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    {/* Adult */}
                    <Counter
                      handleQuantity={handleAdultQuantity}
                      quantity={adultQuantity}
                      price={product.adultPrice}
                    />
                  </ListGroup.Item>
                  {/* child */}
                  {product.childPrice > 0 && (
                    <ListGroup.Item>
                      <Counter
                        handleQuantity={handleChildQuantity}
                        quantity={childQuantity}
                        text={'Child'}
                        price={product.childPrice}
                      />
                    </ListGroup.Item>
                  )}

                  <ListGroup.Item>
                    <Button
                      onClick={addToCartHandler}
                      className='w-100'
                      type='button'
                    >
                      Add to Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col>
                <ListGroup.Item>
                  Description:
                  <div
                    dangerouslySetInnerHTML={{ __html: product.description }}
                  ></div>
                </ListGroup.Item>
              </Col>
            </Row>
          </Container>

          <div className='py-20'>
            <Container>
              <div className=' text-center'>
                <h4 className='text-brand primary-font text-2xl'>
                  Related Products
                </h4>
              </div>
              <Row>
                {products &&
                  products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={6} xl={4}>
                      <Product product={product} />
                    </Col>
                  ))}
              </Row>
            </Container>
          </div>
        </>
      )}
    </>
  )
}

export default ProductScreen
