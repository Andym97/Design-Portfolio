import Navbar from '../../Navbar';
import Footer from '../../Footer';

import '../../PageContainer.css'
import './okayamadenim.css'
import '../../Transitions.css'
import './backpack.css'



import Aos from 'aos';
import 'aos/dist/aos.css';

import React, { useState, useEffect } from 'react';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from "react-flexbox-grid";


import Sidebar from '../../Sidebar';


import '../../Sidebar.css'


function Okayamadenim() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const showButton = () => {
        if (window.innerWidth <= 960) {
        setButton(false);
        } else {
        setButton(true);
        }
    };
  
    useEffect(() => {
        showButton();
    }, []);
  
    window.addEventListener('resize', showButton);
  
  const [isVisible, setVisible] = React.useState(false);
  useEffect(() => {
  Aos.init({
    duration: 600,
  
    
    easing: 'ease',
   
  });
  }, []);
  
  
  const [isActive, setActive] = useState("false");
  
  const handleToggle = () => {
  setActive(!isActive);
  };
    return (
        <div>
<div className='OD'>
        <Sidebar/>

<div className="page-container">
  <div className='layout'>
    <div className='page-contents'>

 <Navbar/>
          

    <div data-aos="flip-up">
    <img src='/images/od//mockup.png'/>    
               
    </div>



    <div data-aos="fadeup" >

        <h3>Overview</h3>
            <div className='grid'>
                 <div className="row">
                     <div className='col'>
                        <div className='container'>
                         <div class='title'>Problem</div>
                    <li>
                    People are likely to be on their mobile devices as opposed to a computer.
                {'\n'}</li> 
                    <li>Okayama Denim mobile webstore does not allow users to easily navigate and purchase items.   </li>
                         </div>
                     </div>

          <div class='col'>
            <div className='container'>
              <div class='title'>Solution </div>
                <li>
               Design a mobile app to allow users to easily place orders online. 
                </li> 
           </div>
          </div>

          <div class='col'>
            <div className='container'>

            < div class='title'>My Role</div>
                <li> UI Design</li> 

             <div class='title'>Timeline</div>
                <li>1 week</li> 

           <div class='title'>Tools</div>
                <li>Figma</li> 

          </div>
          </div>

                </div>
            </div>
    </div>     
    <div className='container'>
        <span className='tag blue'>Target Audience</span>
            <li> International Raw Denim Enthusiasts</li>
    </div>

    <div data-aos="fadeup" > 
        <div className='container'>
            <span className='tag blue'>Why </span>
                <li>
                In 2007, Levi Stratus has tradedmarked the red tab on the rear pocket, and similar arcuates on the rear pockets.
                </li>
                <li>
                Since Japanese denim brands try to reproduce the exact details of the original Levi Stratus 501 Jean, these details must be removed by USA retailers. 
                </li>
                <li>
                US Raw Denim consumers are more likely to buy from Okayama Denim due to cheaper price & recieve exact details of product.
                </li>
        </div>
    </div>


    <div data-aos="fadeup" >
    <h3> Design Process</h3>       
<     div className='container'>

                            <div className="process">

                         
                                <div className='container'>
                                <img src= '/images/od/Splash.png' className='process-pic'/>
                                </div>
                          
                                <div className='container'> 
                                <img src= '/images/od/Home.png' className='process-pic'/>

                                </div>

                                <div className='container'>
                                <img src= '/images/od/Category.png' className='process-pic'/>

                                </div>

                                <div className='container'>
                                <img src= '/images/od/Product.png' className='process-pic'/>

                                </div>
                              
                            </div>

                            </div>
      
                   
     </div>
                    


     <div data-aos="fadeup" >
       <h3>Deliverables and Outcome</h3>
            <div className='container'>
                <div className='video'>
                <video src= '/videos/OD_Prototype.mp4' 
              
                autoPlay loop muted/>
                </div>
            </div>
    </div>
           
            
    

            
    </div> 

           
        </div>
                   </div>
                   <Footer/>
                   </div>

                   </div>

    )
}

export default Okayamadenim
