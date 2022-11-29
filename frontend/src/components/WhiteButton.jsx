import React from 'react'
import { Link } from 'react-router-dom'

const WhiteButton = ({ className, text, to = '/passes' }) => {
  return (
    <div className={className}>
      <Link
        to={to}
        className='hover:no-underline text-base uppercase bg-[#fff] hover:bg-black text-brand hover:text-white font-bold py-3 px-10 '
      >
        {text}
      </Link>
    </div>
  )
}

export default WhiteButton
