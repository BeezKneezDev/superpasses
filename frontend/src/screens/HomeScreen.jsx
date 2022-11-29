import { useEffect } from 'react'
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
import Button from '../components/Button'
import Cover from './../components/Cover'

const Home = () => {
  const dispatch = useDispatch()

  const superpassesList = useSelector((state) => state.superpassesList)
  const { loading, error, products } = superpassesList

  useEffect(() => {
    dispatch(listSuperPasses())
  }, [dispatch])

  return (
    <>
      <Meta />
      {/* this will be static needs updating */}
      <Cover />

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Carousel className='px-10' products={products} />

          <Button
            className='text-center pt-20'
            text='view all passes'
            colour=''
          />
        </>
      )}

      {/* this is to be loaded from DB */}
      <LeadSection
        content="Super Passes offers you a one stop shop to see the best Rotorua tourist
        attractions and Taupo tourist attractions. We have a wide range of Taupo
        &amp; Rotorua sightseeing passes that include iconic and top-rated
        attractions. The passes can be used for sightseeing in one day or for
        tours over several days. If you're looking for things to do in Taupo
        &amp; Rotorua, you need look no further than Super Passes."
      />

      <Locations className='pb-[1px]' />

      <LogoSlider className='footer-slider pt-20' />
    </>
  )
}

export default Home
