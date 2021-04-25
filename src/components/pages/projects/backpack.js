

import Navbar from '../../Navbar';
import Footer from '../../Footer';
import Sidebar from '../../Sidebar';

import '../../PageContainer.css'
import '../../Cards.css'
import '../../Transitions.css'
import './backpack.css'

import React, { useState, useEffect } from 'react';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from "react-flexbox-grid";


import Aos from 'aos';
import 'aos/dist/aos.css';

import '../../Sidebar.css'


function Backpack1() {

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

            <div className='backpack1'> 
            <Sidebar/>
              <div className="page-container">
                <div className='layout'>
                    <div className='page-contents'>

                      <Navbar/>
          
<img src= '/images//backpack/designv1/Laptops (2).png'  />               


  <h3>Overview</h3>
  <div className='grid'>

          <div className="row">
            <div className='col'>
              <div className='container'>
                  <div class='title'>Problem</div>
                    <li>
              <span className=' highlight-text shown'> Travelers having a hard time deciding which backpack fits their needs.</span> 
                    </li> 
                    <li>Depending on the type of traveling, they need certain features with the right capacity.</li>
                    <li>Having the right features and capacity in a backpack is essential.</li>
                </div>
              </div>

          <div class='col'>
            <div className='container'>
              <div class='title'>Solution </div>
                <li>
                   A concept website that provides <span className=' highlight-text shown'>guidance to find a backpack with the right features, capacity and size. </span>
                </li> 
           </div>
          </div>

          <div class='col'>
            <div className='container'>

            < div class='title'>My Role</div>
                <li>UX Research, UI Design</li> 

             <div class='title'>Timeline</div>
                <li>1 week</li> 

           <div class='title'>Tools</div>
                <li>Figma</li> 
                <li>Adobe Illustrator</li> 

          </div>
          </div>

  </div>

</div>

<div data-aos="fadeup" >
  <h3>Approach</h3>
  <div className='container'>

  <div className='sub-container'>
            <div className='group-left'> 
                <h4>Research</h4>
                <ul>
                <li>Types of Backpacks</li>
                <li>Types of Travelers</li>
                <li>Traveling Necessities</li>
                <li>User Personas</li>
                </ul>
            </div>

            <div className='group-right'>
                <h4>Design</h4>
                <ul>
                <li>Brainstorming</li>
                <li>Wireframes</li>
                <li>Design Alternatives</li>
                <li>Prototypes</li>
                </ul>
            </div>
        </div>
</div>
</div>

<div data-aos="fadeup" >
  <h3>Research</h3>
  <div className='container'>
    <p>As this is targeted towards travelers, I began researching by gathering user comments from Reddit forums, r/solotravel, r/onebag, and r/travel.
         Oftentimes, questions are asked related to “what bag did you take for your x long trip”, users also give a general description of what they choose to pack in their bags. 
         This provided some information distinguish the types of travelers.</p>
</div>
</div>

  <div></div>
  <div data-aos="fadeup" >

  <div className='container'>
<span className='tag blue'>Types of Travelers</span>
            <p> There are many types of travelers out there.
                Some travel for a weekend, a week, a couple months, or up to a couple years. <span className='highlight-text shown'>Some major differences between travelers:</span>
                <li>One bag vs Multiple bags </li> 
                <li>Checked luggage vs Carry-on luggage </li>
             <li>Duration of trip </li>
             <li>Packing necessities <span className='highlight-text shown'>greatly vary
                 </span>
            </li>
            </p>
 <span className='tag blue'>Types of Backpacks</span>
            <p> While going through some backpacks that users use, <span className='highlight-text shown'>one major difference</span> between backpacks is
             the addtion of a <span className='highlight-text shown'>
            dedicated camera compartment</span> to safely store camera equipment. Additonal features include:
                <li> Top Loading vs Front Loading Backpack </li>
                <li> Water Resistance </li>
                <li> Hip/Chest Straps </li>
            </p>

         
</div>
</div>
<div></div>
<div data-aos="fadeup" >

<div className='container'>
<span class='tag blue'>User Personas</span>

<p>I have created the following <span className='highlight-text shown'>user personas based on 
                                  a traveler's backpack usage.</span> </p>
                                <img src= '/images//backpack/John.png' className='user-persona'  />
                                <img src= '/images//backpack/Mary.png'className='user-persona'   />
                                <img src='/images//backpack/Kate.png' className='user-persona'  />
                                <img src= '/images//backpack/George.png' className='user-persona'  />


  </div>
  </div>

<div data-aos="fadeup" >

<h3>Design Process</h3>
</div>
<div className='container'>
<span class='tag blue'>Flow Chart </span>

     <div>
        <img src= '/images//backpack/flow.png' className='flow-img'/>
      </div>

      <p> In this case, <span className=' highlight-text shown'>deciding if the user needed a bag with
       camera compartments</span> was the <span className=' highlight-text shown'>most important factor</span> to determine the right bag. 
                 Since this is a technical feature of the bag, it is the <span className=' highlight-text shown'>main difference between a regular backpack and a camera backpack. </span>
                    The second most important factor is the size of the bag. 

                    Rather than giving the options of “Small, Medium or Large”, 
                    we ask if the user will “need to fit everything in this one bag”, <span className=' highlight-text shown'>eliminating certain bag sizes depending on the answer</span>, followed by “how long is your trip” 
                    to get a better estimate the size of the bag. 
                </p> 
                <p> Ex: If a user only had one bag to bring, this would automatically require a medium or large bag.</p>

</div>

<div data-aos="fadeup" >

 <div className='container'>
  <span class='tag blue'>Initial Wireframes</span>
    <img src= '/images//backpack/designv1/bwireframe.png' className='wireframe' />
</div>
</div>

<div data-aos="fadeup" >
  <div className='container'>
                    <span class='tag blue'>Protoype </span>
                    <p> While the intial wireframes only consisted of 4 questions, <span class=' highlight-text shown'>I had decided to add another question to the process</span>
                . By having the user <span className=' highlight-text shown'>estimate the number of items they are bringing,
                this will further enhance the size of the bag needed </span> for the trip. 
                A <span className=' highlight-text shown'>progress bar</span> was also added
                so user can  <span className=' highlight-text shown'>keep track of their questions and return if needed.  </span>
            </p>
            <p> 
                In addtion to the extra question, I have also changed the functionality of the recommended page.
                Initially, each product listing had a horizontal scrolling under each price option.
                In the  <span className=' highlight-text shown'> final version, I had removed the horizontal scrolling and limited it only to veritcal scrolling
                for better viewing purposes</span>
                . However, the user will have to manually select their price filter.
            </p>  
                    <img src= '/images//backpack/designv1/bprototype.png' className='wireframe' />               
</div>
</div>

<div data-aos="fadeup" >
      <h3>What I Learned</h3>
        <div className='container'>
          <span class='tag blue'>Functional Limitations </span>
            <p>While I gave the option for the user to the number of items they are bringing on their trip, 
               there is a possibility of bringing other items that are not listed on that page. 
               I had only made options for common items that would mainly occupy their bag storage. 
               The size of each item can also vary greatly, affecting the size of the bag needed.</p>
          <span class='tag blue'>Design  </span>
            <p>While this is my first design for a concept website, I knew I wanted to maintain a minimalistic layout throughout all pages. 
               Originally, I had the idea of a green primary color to represent nature while traveling
                however, the color green I had in mind did not fit in with the secondary colors.
            </p>
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

export default Backpack1
