import React from 'react'

const Counter = ({ handleQuantity, quantity, text = 'Adult Pass', price }) => {
  return (
    <div className='flex justify-between items-center'>
      {/* Counter */}
      <div class='custom-number-input h-10 w-32'>
        <div class='flex flex-row h-10 w-full  relative bg-transparent mt-1'>
          <button
            class=' bg-gray-300 text-white hover:text-gray-700 hover:bg-gray-400 h-full w-20  cursor-pointer outline-none'
            onClick={() => handleQuantity('dec')}
          >
            <span class='m-auto text-2xl font-thin'>-</span>
          </button>
          <div class='text-center px-3 bg-[#ddd] font-semibold text-md md:text-basecursor-default flex items-center text-gray-700 '>
            <div>{quantity}</div>
          </div>
          <button
            class='bg-gray-300 text-white hover:text-gray-700 hover:bg-gray-400 h-full w-20  cursor-pointer'
            onClick={() => handleQuantity('inc')}
          >
            <span class='m-auto text-2xl font-thin'>+</span>
          </button>
        </div>
      </div>
      {/* pass name */}
      <div>{text}</div>
      {/* pass price  */}
      <div>$ {price * quantity}</div>
    </div>
  )
}

export default Counter
