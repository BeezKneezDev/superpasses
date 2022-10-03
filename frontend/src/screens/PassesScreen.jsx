import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Product from '../components/Product'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions'
import ProductCarousel from './../components/ProductCarousel'
import Meta from '../components/Meta'
import Slider from './../components/Slider'
import Navbar from '../components/Navbar'
import { Container } from 'react-bootstrap'
import Card from '../components/Card'
import { listAttractions } from './../actions/attractionActions'

const Passes = () => {
  const { keyword } = useParams()
  const dispatch = useDispatch()
  const pageNumber = useParams().pageNumber || 1

  const attractionsList = useSelector((state) => state.attractionsList)
  const {
    loading: loadingAttractions,
    error: errorAttractions,
    attractions
  } = attractionsList

  const productsList = useSelector((state) => state.productsList)
  const { loading, error, products, page, pages } = productsList

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber))
    dispatch(listAttractions())
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />

      <div className='px-60 pt-28 pb-40'>
        <p className=' text-4xl text-center leading-snug'>
          Super Passes offers you a one stop shop to see the best Rotorua
          tourist attractions and Taupo tourist attractions. We have a wide
          range of Taupo &amp; Rotorua sightseeing passes that include iconic
          and top-rated attractions. The passes can be used for sightseeing in
          one day or for tours over several days. If you're looking for things
          to do in Taupo &amp; Rotorua, you need look no further than Super
          Passes.
        </p>
      </div>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row className='px-10 pb-40'>
            {attractions.map((attraction) => (
              <Col
                key={attraction._id}
                sm={12}
                md={6}
                lg={4}
                xl={3}
                className='my-2'
              >
                <Card attraction={attraction} />
              </Col>
            ))}
          </Row>

          <div className='m-auto px-20'>
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </div>
        </>
      )}
    </>
  )
}

export default Passes
