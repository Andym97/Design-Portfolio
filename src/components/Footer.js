import './Footer.css'
import { SocialIcon } from 'react-social-icons';


import React from 'react'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-section'>
       
            {/* <img src= './images/linkedin.png' className='social-link'/> */}
            <SocialIcon url="https://www.linkedin.com/in/andy-mui-2386941a9/"
             network="linkedin"
              fgColor="#000000" 
              bgColor="transparent" />

            <SocialIcon network="dribbble" 
            url="https://dribbble.com/Andyym" 
            fgColor="#000000"
             bgColor="transparent" />

            <p>Copyright © 2021 Andy Mui</p>
            </div>
        </div>
    )
}

export default Footer
