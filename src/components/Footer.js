import './Footer.css'

import React from 'react'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-section'>
            </div>
            {/* <img src= './images/linkedin.png' className='social-link'/> */}
            <a href="https://www.linkedin.com/in/andy-mui-2386941a9/">
            <img src= './images/linkedin.png' className='social-link' />
            </a>
            <p>Copyright © 2021 Andy Mui</p>
        

        </div>
    )
}

export default Footer
