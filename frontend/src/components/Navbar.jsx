import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import Topbar from './Topbar'
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineShoppingCart
} from 'react-icons/ai'
import { logout } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
  const dispatch = useDispatch()
  const quantity = useSelector((state) => state.cart.quantity)
  const userLogin = useSelector((state) => state.userLogin)
  const cart = useSelector((state) => state.cart)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
    console.log('logout')
  }
  return (
    <header className='flex w-full relative'>
      <div className='flex justify-center absolute bg-white  z-10 top-0'>
        <a href='/'>
          <img
            className='p-2'
            width={225}
            src='https://superpasses.co.nz/wp-content/themes/SP19/images/logo.png'
            alt=''
          />
        </a>
      </div>
      <div className='w-full'>
        <Topbar />

        <div className='flex  py-3  bg-seconary'>
          <div className='bg-red w-1/3 m-auto'>
            <nav className=''>
              <ul className='flex justify-between'>
                <Link
                  className=' uppercase font-semibold text-base text-white hover:text-primary'
                  to={'/'}
                >
                  home
                </Link>
                <Link
                  className=' uppercase font-semibold text-base text-white hover:text-primary'
                  to={'/passes'}
                >
                  passes
                </Link>
                <Link
                  className=' uppercase font-semibold text-base text-white hover:text-primary'
                  to={'/'}
                >
                  about
                </Link>
                <Link
                  className=' uppercase font-semibold text-base text-white hover:text-primary'
                  to={'/'}
                >
                  blogs
                </Link>
                <Link
                  className=' uppercase font-semibold text-base text-white hover:text-primary'
                  to={'/'}
                >
                  contact
                </Link>
              </ul>
            </nav>
          </div>

          <div className=' flex w-1/3 '>
            <Nav className='ml-auto pr-20 text-white hover:text-white'>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to={'/profile'}>
                    <NavDropdown.Item>
                      <i className='fas fa-user'></i> Profile
                    </NavDropdown.Item>
                  </LinkContainer>
                  {userInfo.isAdmin && (
                    <>
                      <LinkContainer to={'/admin/users'}>
                        <NavDropdown.Item>
                          <i className='fas fa-user'></i> Users
                        </NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to={'/admin/products'}>
                        <NavDropdown.Item>
                          <i className='fas fa-user'></i> Products
                        </NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to={'/admin/orders'}>
                        <NavDropdown.Item>
                          <i className='fas fa-user'></i> Orders
                        </NavDropdown.Item>
                      </LinkContainer>
                    </>
                  )}
                  <NavDropdown.Item onClick={logoutHandler}>
                    <i className='fas fa-sign-out'></i> Sign Out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <LinkContainer to={'/login'}>
                    <Nav.Link className='text-base'>
                      <i className='fas fa-user'></i> Sign In
                    </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to={'/register'}>
                    <Nav.Link className='text-base'>
                      <i className='fas fa-user'></i> Register
                    </Nav.Link>
                  </LinkContainer>
                </>
              )}
              <div className='m-auto relative'>
                <Link to={'/cart'}>
                  <AiOutlineShoppingCart className='text-[3em] text-white' />
                  <div className=' absolute top-[-10px] right-[-10px] bg-white text-brand w-7 h-7 flex  rounded-full'>
                    <div className='m-auto'>{cart.quantity}</div>
                  </div>
                </Link>
              </div>
            </Nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
