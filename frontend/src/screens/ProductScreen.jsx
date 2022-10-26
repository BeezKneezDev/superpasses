import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Row, ListGroup, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Meta from '../components/Meta'
import Hero from '../components/Hero'

import { addProduct } from '../reducers/cartReducers/cartSlice'
import Counter from './../components/Counter'
import Carousel from './../components/Carousel'

const ProductScreen = () => {
  const [loadPageAtTop, setLoadPageAtTop] = useState(true)
  const [pageLoaded, setPageLoaded] = useState(false)

  if (loadPageAtTop) {
    window.scrollTo(0, 0)
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { slug } = useParams()

  console.log(slug)

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const productDetails = useSelector((state) => state.productDetail)
  const { loading, error, product, products } = productDetails

  const [adultQuantity, setAdultQuantity] = useState(1)
  const [childQuantity, setChildQuantity] = useState(0)

  const [success, setSuccess] = useState(false)

  console.log('loading')
  const attractions = product.attraction

  useEffect(() => {
    dispatch(listProductDetails(slug))
    setLoadPageAtTop(true)
    setPageLoaded(true)
    console.log('fired')
  }, [dispatch, slug])

  const handleAdultQuantity = (type) => {
    type === 'dec'
      ? adultQuantity > 1 && setAdultQuantity(adultQuantity - 1)
      : setAdultQuantity(adultQuantity + 1)
    setLoadPageAtTop(false)
  }

  const handleChildQuantity = (type) => {
    type === 'dec'
      ? childQuantity > 0 && setChildQuantity(childQuantity - 1)
      : setChildQuantity(childQuantity + 1)
    setLoadPageAtTop(false)
  }

  const addToCartHandler = () => {
    dispatch(addProduct({ ...product, adultQuantity, childQuantity }))
    setLoadPageAtTop(false)
    setSuccess(true)
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
          {pageLoaded && (
            <>
              <Hero image={product.image} />
              <div className='container pt-10 pb-10'>
                <button
                  className='btn bg-brand text-white my-3'
                  onClick={() => navigate(-1)}
                >
                  Go back
                </button>
                {userInfo && userInfo.isAdmin && (
                  <button className='btn bg-brand text-white my-3 ml-3'>
                    <Link to={`/admin/product/${product.slug}/edit`}>
                      Edit Product
                    </Link>
                  </button>
                )}
                <div className='flex '>
                  <div className='card-zoom basis-1/2'>
                    <div
                      className='card-zoom-image'
                      style={{
                        backgroundImage: `url(${product.image})`
                      }}
                    ></div>
                  </div>

                  <div className='basis-1/2 ml-3'>
                    <ListGroup variant='flush'>
                      <ListGroup.Item className='primary-font text-4xl text-brand'>
                        <h3>{product.name}</h3>
                      </ListGroup.Item>

                      <ListGroup.Item>
                        <div>
                          <span className=' font-bold text-lg mr-2'>
                            Adult Price:
                          </span>
                          <span className='  text-brand text-lg primary-font'>
                            ${product.adultPrice}
                          </span>
                        </div>
                        <div>
                          <span className=' font-bold text-lg mr-2'>
                            Child Price:
                          </span>
                          <span className=' capialize text-brand text-lg primary-font'>
                            ${product.childPrice}
                          </span>
                        </div>
                      </ListGroup.Item>

                      <ListGroup.Item>
                        <p className='text-base'>{product.summary}</p>
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
                      {success && (
                        <ListGroup.Item>
                          <Message
                            onShow={setTimeout(() => setSuccess(false), 5000)}
                            variant='success text-center'
                          >
                            <Link className=' ' to={'/cart'}>
                              Success view cart
                            </Link>
                          </Message>
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

                      <ListGroup.Item>
                        <span className=' capitalize'>{product.location} </span>
                        <span className=' capitalize'>{product.activity} </span>
                        <span className=' capitalize'>
                          {attractions.map((attraction) => `${attraction} `)}
                        </span>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </div>
                <div>
                  <ListGroup.Item>
                    <h4 className=' primary-font text-2xl underline py-3'>
                      Description:
                    </h4>
                    <div
                      className='text-base description'
                      dangerouslySetInnerHTML={{ __html: product.description }}
                    ></div>
                  </ListGroup.Item>
                </div>
              </div>

              {products.length > 0 && (
                <div className='py-20'>
                  <div className=' px-0'>
                    <div className=' text-center'></div>
                    <Carousel products={products} />
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  )
}

export default ProductScreen
