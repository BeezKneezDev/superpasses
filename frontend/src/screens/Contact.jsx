import React from 'react'
import ContactForm from '../components/ContactForm'
import Hero from './../components/Hero'
import Locations from './../components/Locations'
import LogoSlider from './../components/LogoSlider'

const Contact = () => {
  return (
    <>
      <Hero />
      <div className='container'>
        <div className='container pt-20 pb-10 mx-[-15px]'>
          <h1 className='py-4 mb-2 primary-font text-3xl leading-4  text-brand'>
            Contact Us
          </h1>
          <div>
            <p className=' text-4xl leading-snug'>
              If you have any enquiries, please do not hesitate to contact us by
              filling out the form below or give us a call on{' '}
              <a href='tel:022 304 8171'>022 304 8171</a>.
            </p>
          </div>
        </div>
        <div className='bg-brand'>
          <ContactForm />
        </div>
      </div>

      <div className='footer-slider pt-20'>
        <LogoSlider />
      </div>
    </>
  )
}

export default Contact
