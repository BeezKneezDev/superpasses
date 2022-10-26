import React from 'react'

const Hero = ({
  image = 'https://www.skyline.co.nz/media/2979/skyline-rotorua_gondola_gondola-cabin.jpg?anchor=center&mode=crop&width=1920&height=960&rnd=132155441870000000'
}) => {
  return (
    <div
      className=' h-[35vh] bg-center bg-cover '
      style={{
        backgroundImage: `url("${image}")`
      }}
    ></div>
  )
}

export default Hero
