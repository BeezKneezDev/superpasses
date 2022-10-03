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

const Home = () => {
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
      {!keyword ? (
        <>
          <Slider />
        </>
      ) : (
        <Link to='/' className='btn btn-light'>
          Go back
        </Link>
      )}

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <div className='m-auto px-20'>
            <Row>
              {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
            {/* <Paginate
              pages={pages}
              page={page}
              keyword={keyword ? keyword : ''}
            /> */}
            <div className='text-center pt-10'>
              <button className='text-base uppercase bg-brand hover:bg-seconary text-white font-bold py-3 px-10 '>
                View All Passes
              </button>
            </div>
          </div>
        </>
      )}

      {/* Superpasses 
      load catergory superpasses products */}

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

      {/* location cards Rotorua */}
      <div className='flex h-[65vh] bg-brand'>
        <div
          className='w-1/2 bg-center bg-cover flex'
          style={{
            backgroundImage: `url("/images/rotorua.jpg")`
          }}
        ></div>
        <div className='w-1/2  text-white p-24 m-auto'>
          <div>
            <h2 className='primary-font text-white text-4xl'>
              THE CITY OF ROTORUA
            </h2>
            <p className='text-lg'>
              Rotorua, the&nbsp;
              <a href='https://superpasses.co.nz/location-information/'>
                hub of North Island tourism
              </a>
              , is an easy 2.5 hour drive south of Auckland. Well known for its
              geothermal activity with{' '}
              <a href='https://superpasses.co.nz/te-puia/'>violent geysers</a>,
              boiling mud pools,{' '}
              <a href='https://superpasses.co.nz/whakarewarewa-village/'>
                gentle hot springs
              </a>
              , steaming cliffs and volcanoes, Rotorua is a must see
              destination. Home to Maori culture, the welcome from the
              indigenous people will make you feel part of the city.
            </p>
            <div className='pt-4'>
              <button class=' text-base uppercase bg-white hover:bg-[#31808f] text-brand font-bold py-3 px-10 '>
                View Rotorua Passes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* location cards Taupo */}
      <div className='flex h-[65vh] bg-seconary'>
        <div className='w-1/2  text-white p-24 m-auto'>
          <div>
            <h2 className='primary-font text-white text-4xl'>
              THE CITY OF TAUPO
            </h2>
            <p className='text-lg'>
              Taupo is approx. 1 hours drive south of Rotorua (Approx. 3.5 Hours
              from Auckland) and is distinguished by its lakefront setting and
              range of{' '}
              <a href='https://superpasses.co.nz/product-category/taupo/'>
                outdoor activities
              </a>{' '}
              from{' '}
              <a href='https://superpasses.co.nz/product/hukafalls-jet/'>
                jet-boating
              </a>
              ,{' '}
              <a href='https://superpasses.co.nz/product-category/taupo/sail-barbary/'>
                lake cruises
              </a>{' '}
              to{' '}
              <a href='https://superpasses.co.nz/product-category/taupo/taupo-tandem-skydive/'>
                skydiving
              </a>
              ! Taupo is surrounded by hot springs, towing volcanoes and the
              amazing landscape of the{' '}
              <a href='https://superpasses.co.nz/product/go-explore-nz-the-desert-road/'>
                Tongariro National Park
              </a>
              .
            </p>
            <div className='pt-4'>
              <button class=' text-base uppercase bg-white hover:bg-[#31808f] text-brand font-bold py-3 px-10 '>
                View Taupo Passes
              </button>
            </div>
          </div>
        </div>
        <div
          className='w-1/2 bg-center bg-cover flex'
          style={{
            backgroundImage: `url("/images/taupo.jpg")`
          }}
        ></div>
      </div>

      {/* display catergories */}
      <Row className='px-10 py-40'>
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
    </>
  )
}

export default Home
