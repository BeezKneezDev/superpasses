import React from 'react'
import { useState, Fragment } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from '@material-tailwind/react'
import Hero from '../components/Hero'
import Locations from './../components/Locations'
import LogoSlider from './../components/LogoSlider'
import { Link } from 'react-router-dom'
import LeadSection from './../components/LeadSection'
import { useSelector } from 'react-redux'

import { listAttractions } from '../actions/attractionActions'

const Faqs = () => {
  const [open, setOpen] = useState(0)

  const attractionsList = useSelector((state) => state.attractionsList)
  const { attractions } = attractionsList

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value)
  }

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 }
  }
  return (
    <>
      <Hero />
      <div className='container pt-20 '>
        <h1 className='py-4 mb-2 primary-font text-3xl leading-4  text-brand'>
          Frequently Asked Questions
        </h1>

        <Fragment>
          <Accordion
            className='shadow-inner faq'
            open={open === 1}
            animate={customAnimation}
          >
            <AccordionHeader
              className='text-white p-4'
              onClick={() => handleOpen(1)}
            >
              Do I have to use my pass all in one day?
            </AccordionHeader>
            <AccordionBody className='p-4 text-base'>
              No, but all Super Passes are able to be completed in a single day.
              You are very welcome to dial it down a bit and use the pass over
              several days.
            </AccordionBody>
          </Accordion>
          <Accordion
            className='shadow-inner faq'
            open={open === 2}
            animate={customAnimation}
          >
            <AccordionHeader
              className='text-white p-4'
              onClick={() => handleOpen(2)}
            >
              Should I buy my Super Pass before I arrive in Rotorua?
            </AccordionHeader>
            <AccordionBody className='p-4 text-base'>
              Yes - it's highly recommended. Some activities have limited
              capacity so it's best to buy as soon as you can. Get all your
              activities sorted before you get here, and you'll have more time
              to relax and enjoy your activities.
            </AccordionBody>
          </Accordion>
          <Accordion
            className='shadow-inner faq'
            open={open === 3}
            animate={customAnimation}
          >
            <AccordionHeader
              className='text-white p-4'
              onClick={() => handleOpen(3)}
            >
              Can you create a custom itinerary for me?
            </AccordionHeader>
            <AccordionBody className='p-4 text-base'>
              Yes - we love doing this! Let us know what kind of activities you
              would like to do and we'll prepare a custom-made itinerary just
              for you. We can even sort a rental car or coach if you need it.
              Contact us for a quote. actualize our dreams.
            </AccordionBody>
          </Accordion>

          <Accordion
            className='shadow-inner faq'
            open={open === 4}
            animate={customAnimation}
          >
            <AccordionHeader
              className='text-white p-4'
              onClick={() => handleOpen(4)}
            >
              What happens after I have paid for my Rotorua Super Pass?
            </AccordionHeader>
            <AccordionBody className='p-4 text-base'>
              You will receive a Confirmation Order by email that you can
              present on arrival to each activity. This email is automated so if
              you have not received this email, please contact us.
            </AccordionBody>
          </Accordion>

          <Accordion
            className='shadow-inner faq'
            open={open === 5}
            animate={customAnimation}
          >
            <AccordionHeader
              className='text-white p-4'
              onClick={() => handleOpen(5)}
            >
              Do I need to print my confirmation?
            </AccordionHeader>
            <AccordionBody className='p-4 text-base'>
              No, but we recommend it if possible. The activities will also be
              happy to accept seeing the confirmation on your phone. They will
              need to see the Order Number - this is a 4-digit number on your
              confirmation. In some areas in Rotorua such at Paradise Valley and
              Waikite Valley, internet reception is limited so make sure you
              will be able to access the email confirmation from your phone or
              device.
            </AccordionBody>
          </Accordion>

          <Accordion
            className='shadow-inner faq'
            open={open === 6}
            animate={customAnimation}
          >
            <AccordionHeader
              className='text-white p-4'
              onClick={() => handleOpen(6)}
            >
              What is the benefit of booking with Rotorua Super Passes?
            </AccordionHeader>
            <AccordionBody className='p-4 text-base'>
              By booking with Rotorua Super Passes, you will receive a better
              overall price for the included attractions and activities , rather
              than paying individual entry prices. This is because we act as a
              one stop shop and have negotiated excellent prices with the
              participating activities and attractions. You also have total
              flexibility as to when you want to visit a particular attraction
              and most activities you don't need to book in advance. You can
              also choose to visit attractions over several days as the Passes
              are open dated.
            </AccordionBody>
          </Accordion>

          <Accordion
            className='shadow-inner faq'
            open={open === 7}
            animate={customAnimation}
          >
            <AccordionHeader
              className='text-white p-4'
              onClick={() => handleOpen(7)}
            >
              Can I cancel my booking?
            </AccordionHeader>
            <AccordionBody className='p-4 text-base'>
              All cancellations incur loss of 10% of the total booking price *
              If cancellation made within 7 days of arrival day, loss of 20% of
              the total booking price * If cancellation made within 24 hours of
              arrival day, loss of 50% of the total booking price *
            </AccordionBody>
          </Accordion>

          <Accordion
            className='shadow-inner faq'
            open={open === 8}
            animate={customAnimation}
          >
            <AccordionHeader
              className='text-white p-4'
              onClick={() => handleOpen(8)}
            >
              How long is the Super Pass valid for?
            </AccordionHeader>
            <AccordionBody className='p-4 text-base'>
              Passes are valid from 01 October of the current year to 30
              September of the following year. To double check, click on the
              Book Now icon and on the underlined Pass name.
            </AccordionBody>
          </Accordion>
        </Fragment>
      </div>
      <LeadSection
        content={
          "Can't find the answer you're after, give us a call on 022 304 8171 or email res@rotoruatravel.co.nz."
        }
      />
      <div className='text-center mt-[-100px]'>
        <Link
          to={'/contact'}
          className=' hover:no-underline text-base uppercase bg-seconary hover:bg-brand text-white font-bold py-3 px-10 '
        >
          Contact Us
        </Link>
      </div>
      <div className='pt-40'>
        <Locations />
      </div>
      <div className='footer-slider pt-20'>
        <LogoSlider attractions={attractions} />
      </div>
    </>
  )
}

export default Faqs
