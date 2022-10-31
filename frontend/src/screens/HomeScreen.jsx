import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Meta from '../components/Meta'
import Loader from '../components/Loader'
import Slider from './../components/Slider'
import Message from '../components/Message'
import Carousel from './../components/Carousel'
import { useDispatch, useSelector } from 'react-redux'
import { listSuperPasses } from '../actions/productActions'
import Locations from './../components/Locations'
import LeadSection from './../components/LeadSection'
import LogoSlider from './../components/LogoSlider'
import { listAttractions } from '../actions/attractionActions'

const Home = () => {
  const dispatch = useDispatch()

  const superpassesList = useSelector((state) => state.superpassesList)
  const { loading, error, products } = superpassesList

  const attractionsList = useSelector((state) => state.attractionsList)
  const {
    loading: loadingAttractions,
    error: errorAttractions,
    attractions
  } = attractionsList

  useEffect(() => {
    dispatch(listSuperPasses())
    dispatch(listAttractions())
  }, [dispatch])

  return (
    <>
      <Meta />
      {/* this will be static needs updating */}
      <Slider />

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <div className='px-10'>
            <Carousel products={products} />
          </div>

          <div className='text-center pt-20'>
            <Link
              to={'/passes'}
              className=' hover:no-underline text-base uppercase bg-brand hover:bg-seconary text-white font-bold py-3 px-10 '
            >
              View All Passes
            </Link>
          </div>
        </>
      )}

      <LeadSection
        content="Super Passes offers you a one stop shop to see the best Rotorua tourist
        attractions and Taupo tourist attractions. We have a wide range of Taupo
        &amp; Rotorua sightseeing passes that include iconic and top-rated
        attractions. The passes can be used for sightseeing in one day or for
        tours over several days. If you're looking for things to do in Taupo
        &amp; Rotorua, you need look no further than Super Passes."
      />

      <div className='pb-[1px]'>
        <Locations />
      </div>
      <div className='footer-slider pt-20'>
        <LogoSlider attractions={attractions} />
      </div>
    </>
  )
}

export default Home
