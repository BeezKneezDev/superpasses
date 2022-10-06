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
import Product from '../components/Product'

import { addProduct } from '../reducers/cartReducers/cartSlice'
import { listProducts } from '../actions/productActions'

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

const AddContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`

const ProductScreen = () => {
  const [qty, setQty] = useState(1)

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productDetail = useSelector((state) => state.productDetail)
  const { loading, error, product } = productDetail

  const { id } = useParams()
  const navigate = useNavigate()

  const [adultQuantity, setAdultQuantity] = useState(1)
  const [childQuantity, setChildQuantity] = useState(0)

  const productsList = useSelector((state) => state.productsList)
  const { products } = productsList

  const keyword = ''
  const pageNumber = 1
  const attraction = product.attraction[0]

  const activity = ''

  useEffect(() => {
    dispatch(listProductDetails(id))
    dispatch(listProducts(keyword, pageNumber, attraction, activity))
    console.log(product.attraction[0])
  }, [dispatch, id])

  const handleAdultQuantity = (type) => {
    if (type === 'dec') {
      adultQuantity > 1 && setAdultQuantity(adultQuantity - 1)
    } else {
      setAdultQuantity(adultQuantity + 1)
    }
    console.log('clicked')
  }

  const handleChildQuantity = (type) => {
    if (type === 'dec') {
      childQuantity > 1 && setChildQuantity(childQuantity - 1)
    } else {
      setChildQuantity(childQuantity + 1)
    }
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
          <Container>
            <Link className='btn bg-brand text-white my-3' to='/passes'>
              Go back
            </Link>
            <Row>
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
                    <AddContainer>
                      <div onClick={() => handleAdultQuantity('dec')}>-</div>
                      <Amount>{adultQuantity}</Amount>
                      <div onClick={() => handleAdultQuantity('inc')}>+</div>
                      <div>Adult Pass (check if only one)</div>
                      <Price>$ {product.adultPrice}</Price>
                    </AddContainer>
                  </ListGroup.Item>
                  {/* child */}
                  {product.childPrice > 0 && (
                    <ListGroup.Item>
                      <AddContainer>
                        <div onClick={() => handleChildQuantity('dec')}>-</div>
                        <Amount>{childQuantity}</Amount>
                        <div onClick={() => handleChildQuantity('inc')}>+</div>
                        <div>Child Pass</div>
                        <Price>$ {product.childPrice}</Price>
                      </AddContainer>
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

          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  )
}

export default ProductScreen
