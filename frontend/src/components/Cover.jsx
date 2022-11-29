import React from 'react'
import Button from '../components/Button'

const Cover = () => {
  return (
    <div>
      <div
        className=' pr-16 '
        style={{
          background: 'rgb(85,161,175)',
          background:
            'linear-gradient(0deg, rgba(85,161,175,1) 0%, rgba(49,128,143,1) 35%, rgba(49,128,143,1) 100%)'
        }}
      >
        <div
          className=' w-[100%] h-[80vh] bg-center bg-cover'
          style={{
            backgroundImage: `url("https://www.skyline.co.nz/media/2979/skyline-rotorua_gondola_gondola-cabin.jpg?anchor=center&mode=crop&width=1920&height=960&rnd=132155441870000000")`
          }}
        >
          <div className='flex h-[100%] relative pl-[220px] bg-[#0000003a]'>
            <div className=' mt-auto mb-auto max-w-[600px]'>
              <h2 className='primary-font text-8xl text-white'>
                top tourist attractions
              </h2>
              <p className='text-2xl pt-3 pb-10  text-white'>
                If you’re looking for things to do in Taupo & Rotorua, you need
                look no further than Super Passes.
              </p>

              <Button text='view passes' className='pt-8' />
            </div>
          </div>
        </div>
      </div>

      <div className=' mb-20 ml-48 h-20 w-[100%] bg-brand'></div>
    </div>
  )
}

export default Cover
