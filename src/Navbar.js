import React from "react";
import './Navbar.css'
import home from './components/images/home.png'
function Nav(P)
{
    return (
      <>
        <div className='nav_container'>
          <a href='/'>
            
            <div>Home</div>
          </a>
          <div id='nav_title'>Algorithm visualiser</div>
        </div>
      </>
    )
}
export default Nav;