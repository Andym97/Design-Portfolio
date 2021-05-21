import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import './Home.css'
import {Image, Container, Row, Col} from 'react-bootstrap'
import '../Cards.css'
import Footer from '../Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { Transition } from 'react-transition-group';


import { Link } from 'react-router-dom';

import {motion} from 'framer-motion';

const transition={duration: 2, ease: [0.43, 0.13, 0.23, 0.96]};


const pageTransition={
    in:{
        opacity:1
    },
    out:{
        opacity:0

    }
}




function Home() {



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
                    <h1 className='home-tag blue' data-aos="fade-right">Case Studies </h1>

                    <motion.div 
                  whileHover={{scale:1.05 }}
                     fade exit={{opacity:50}} 
                     transition={transition}
                     leave={{opacity:0}}
                    className='card'> 
                    
                    <Link to ='/projects/Backpack'>
                        <div className=' image-container-backpack'>
                             <img 
                     

                             src= './images/backpack/designv1/Laptops (2).png'

                             className='thumbnail'/> 
                        </div>

                    
                        <motion.div 
                            exit={{opacity: 0}} 
                            transition={transition}
                            className='image-detail-container'>
                            <motion.div
                               transition={transition}
                            className="title">
                            <h1 className='card-title'> Backpack Finder   </h1>   
                            <h1 className='card-subtitle'> UX/UI Design</h1> 
                            <card-span className='card-description'> Assists Travelers to Find the Perfect Backpack
                            </card-span>
                            </motion.div>

                        </motion.div>
                       </Link>

                    </motion.div>

                




                    <motion.div 
                    whileHover={{scale:1.05 }}
                     fade exit={{opacity:50}} 
                     transition={transition}
                     leave={{opacity:0}}
                    className='card'> 
                    
                    <Link to ='/projects/okayamadenim'>
                        <div className=' image-container-OD'>
                             <img
                             src= './images/od/OD1.png' 
                             className='thumbnail'/> 
                        </div>

                    
                        <motion.div 
                            exit={{opacity: 0}} 
                            transition={transition}
                            className='image-detail-container'>
                            <motion.div
                               transition={transition}
                            className="title">
                            <h1 className='card-title'> Okayama Denim  </h1>   
                            <h1 className='card-subtitle'>UI Design</h1> 
                            <card-span className='card-description' > Concept Ecommerce App</card-span>
                            </motion.div>

                        </motion.div>
                       </Link>

                    </motion.div>


                   
              
                    <Footer/>

            </div> 

        </div>

      
        
    )
}

export default Home
