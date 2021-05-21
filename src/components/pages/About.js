import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import './About.css';
import Particles from 'react-particles-js';

import Aos from 'aos';
import 'aos/dist/aos.css';



function About() {
  
  const [isVisible, setVisible] = React.useState(false);
  useEffect(() => {
  Aos.init({
    duration: 600,
  
    
    easing: 'ease',
   
  });
  }, []);
  
    return (
        <div>
        <div className="page-container">
            <Navbar/>
            <div className='intro-container'>
     
            <div className='intro'>
            <h1  data-aos="fade-down">Hello There,</h1>
            <p data-aos="fade-right" >I am originally a Computer Science graduate who is fascinated with design. I consider myself as an artist who materializes ideas by
                utilizing different skillsets, whether it be designing or developing.</p>

                <p data-aos="fade-right">-Andy</p>
         
                </div>
            </div>
            <Particles 
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#000000",
            					blur: .5
            				}
            			}
            		}
            	}}
              style={{
                width: '100%',
          
              }}
            /> 
       
          


            </div>
        </div>
    )
}

export default About
