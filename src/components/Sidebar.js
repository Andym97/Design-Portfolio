import './Sidebar.css';


import React, { useState, useEffect } from 'react';
import {Image, Container, Row, Col} from 'react-bootstrap'
import './Cards.css'
import {useHistory} from "react-router-dom";


import { Transition } from 'react-transition-group';


import { Link } from 'react-router-dom';

import {motion} from 'framer-motion';

const transition={duration: 2, ease: [0.43, 0.13, 0.23, 0.96]};

function Sidebar() {
    const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);
    return (
        <Link to='/'  onClick={closeMobileMenu}>

        <div className='side-bar'>
       <motion.div 
        exit={{opacity: 0}} 
        transition={transition}>
        <img src= '/images/Back arrow.png'  />    
        </motion.div>          
        </div>

          </Link>

  
    )
}

export default Sidebar

