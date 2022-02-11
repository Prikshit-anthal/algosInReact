import React from "react";
import './Navbar.css'
import home from './components/images/home.png'
function Nav(P)
{
    return (
      <div className='relative flex min-w-screen  align-middle bg-black text-white'>
        <div className='flex align-middle'>
          <a
            href='/algosInReact'
            className='flex items-center text-xl text-white'
          >
            <div>Home</div>
          </a>
        </div>
        <div className='flex justify-center w-full'>
          <div id='nav_title'>Algorithm visualiser</div>{' '}
        </div>
      </div>
    )
}
export default Nav;