import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay } from 'swiper'
import { Container, Button } from 'react-bootstrap'

export default function SliderComponent() {
  return (
    <>
      <div className=' pr-16 bg-[#31808f]'>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: true
          }}
          navigation={false}
          modules={[Autoplay]}
          className='mySwiper '
        >
          <SwiperSlide className=' relative'>
            <div className='w-[100%] h-[80vh] absolute bg-[#0000003a]'></div>
            <div
              className=' w-[100%] h-[80vh] bg-center bg-cover'
              style={{
                backgroundImage: `url("https://www.skyline.co.nz/media/2979/skyline-rotorua_gondola_gondola-cabin.jpg?anchor=center&mode=crop&width=1920&height=960&rnd=132155441870000000")`
              }}
            >
              <Container className='flex h-[100%] relative pr-[30%]'>
                <div className=' mt-auto mb-auto'>
                  <h2 className='primary-font text-8xl text-white'>
                    top tourist attractions
                  </h2>
                  <p className='text-2xl pt-3 pb-4  text-white'>
                    If you’re looking for things to do in Taupo & Rotorua, you
                    need look no further than Super Passes.
                  </p>
                  <button class=' text-lg uppercase bg-[#55a1af] hover:bg-[#31808f] text-white font-bold py-3 px-10 '>
                    View Passes
                  </button>
                </div>
              </Container>
            </div>
          </SwiperSlide>

          {/* <SwiperSlide className=' relative'>
            <div className='w-[100%] h-[80vh] absolute bg-[#0000003a]'></div>
            <div
              className=' w-[100%] h-[80vh] bg-center bg-cover'
              style={{
                backgroundImage: `url("https://checkyeti.imgix.net/images/prod/products/14229/rafting-on-kaituna-river-rotorua-rafting-16.jpeg")`
              }}
            >
              <Container className='flex h-[100%] relative pr-[30%]'>
                <div className='p-[166px] mt-auto mb-auto'>
                  <h2 className='primary-font text-8xl text-white'>Skyline</h2>
                  <p className='text-lg pt-3 pb-4  text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur labore ut dignissimos quod accusamus incidunt
                    eligendi minus? Distinctio, fugiat voluptas dignissimos in
                    quia itaque, tempore sunt est asperiores officia doloremque!
                  </p>
                  <button class=' text-lg uppercase bg-[#55a1af] hover:bg-[#31808f] text-white font-bold py-3 px-10 '>
                    Read More
                  </button>
                </div>
              </Container>
            </div>
          </SwiperSlide>

          <SwiperSlide className=' relative'>
            <div className='w-[100%] h-[80vh] absolute bg-[#0000003a]'></div>
            <div
              className=' w-[100%] h-[80vh] bg-center bg-cover'
              style={{
                backgroundImage: `url("https://www.nzski.com/media/3994/coronet-peak-pano-large.jpg?center=0.5,0.5&quality=90&width=1920&height=1080&mode=crop")`
              }}
            >
              <Container className='flex h-[100%] relative pr-[30%]'>
                <div className='p-[166px] mt-auto mb-auto'>
                  <h2 className='primary-font text-8xl text-white'>Skyline</h2>
                  <p className='text-lg pt-3 pb-4  text-white'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequatur labore ut dignissimos quod accusamus incidunt
                    eligendi minus? Distinctio, fugiat voluptas dignissimos in
                    quia itaque, tempore sunt est asperiores officia doloremque!
                  </p>
                  <button class=' text-lg uppercase bg-[#55a1af] hover:bg-[#31808f] text-white font-bold py-3 px-10 '>
                    Read More
                  </button>
                </div>
              </Container>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>

      <div className=' mb-20 ml-48 h-20 w-[100%] bg-[#31808f]'></div>
    </>
  )
}
