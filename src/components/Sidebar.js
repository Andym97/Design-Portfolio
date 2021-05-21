import './Sidebar.css';


import React, { useState, useEffect } from 'react';
import {Image, Container, Row, Col} from 'react-bootstrap'
import './Cards.css'
import {useHistory} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import { Transition } from 'react-transition-group';


import { Link } from 'react-router-dom';

import {motion} from 'framer-motion';
import { linkClasses } from '@material-ui/core';

const transition={duration: 2, ease: [0.43, 0.13, 0.23, 0.96]};

function Sidebar() {
    const [click, setClick] = useState(false);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);


const pageVariants={
    in:{
        opacity:1,
        x:"0"
    },
    out:{
        opacity:0,
        x: "-10vw"
    }
}

const pageTransition={
type:"tween",
ease: [0.43, 0.13, 0.23, 0.96]}
    return (
        <Link to='/'  onClick={closeMobileMenu}>

        <motion.div 
        className='side-bar'
       initial="out"
       animate="in"
       exit="out"
       variants={pageVariants}
       transition={pageTransition}
       >
           <ArrowBackIcon/>
        </motion.div>          

          </Link>

  
    )
}

export default Sidebar

