import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ attraction, filterCategory }) => {
  return (
    <div class='relative group w-96 h-96 overflow-hidden bg-black m-auto '>
      <img
        class='object-cover w-full h-full transform duration-700 backdrop-opacity-100'
        src={attraction.image}
      />
      <div class='absolute w-full h-full shadow-2xl opacity-20 transform duration-500 inset-y-full group-hover:-inset-y-0'></div>
      <div class='absolute bg-gradient-to-t from-brand w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0'>
        <div class='absolute w-full flex place-content-center'>
          <p class='capitalize primary-font font-bold text-3xl text-center shadow-2xl text-white mt-10'>
            {attraction.name}
          </p>
        </div>
        <div class='absolute w-full flex place-content-center mt-20'>
          <p class='font-sans text-lg text-center w-4/5 text-white mt-4'>
            {attraction.activity}
          </p>
        </div>
        <button
          class='absolute left-1/4 bottom-4 bg-white text-black font-bold uppercase h-12 w-48'
          value={attraction.name}
          onClick={filterCategory}
        >
          View Passes
        </button>
      </div>
    </div>
  )
}

export default Card
