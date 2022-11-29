import React from 'react'
import { AiOutlineMail, AiFillFacebook } from 'react-icons/ai'
import SearchBox from './SeachBox'

const Topbar = () => {
  return (
    <div className=' bg-seconary pt-4 pb-1'>
      <div className='flex'>
        <div className='w-1/2 flex items-center'>
          <div className='pr-4 pl-[275px]'>
            <a
              className='flex items-center text-white text-base'
              href='mailto:res@rotoruatravel.co.nz'
            >
              <AiOutlineMail className='mr-2 ' />
              res@rotoruatravel.co.nz
            </a>
          </div>

          <div className=''>
            <a
              className='flex items-center text-white text-base'
              href='https://www.facebook.com/RotoruaSuperPasses/'
              target={'blank'}
            >
              <AiFillFacebook className='mr-2' /> Visit our facebook
            </a>
          </div>
        </div>
        <SearchBox />
      </div>
    </div>
  )
}

export default Topbar
