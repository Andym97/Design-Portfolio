import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';


import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

 

  return (
    <>
      <nav className='navbar'>
   
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>

          <div className='site-title'>
          Andy Mui
           </div>
            <i class='fab fa-typo3' />
            <div className='side-tag-container'>
            <side-tag> UI Designer | Web Developer </side-tag>

            </div>
        
           
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        
            
            <li  className='nav-item'>
              <Link
                to='/About'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               About
              </Link>
            </li>
            
          

         

          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;