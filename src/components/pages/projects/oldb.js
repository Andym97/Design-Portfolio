
import Navbar from '../../Navbar';

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






function Backpack() {

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

            <div className='backpack'> 

           <div className="page-container">
           <div className='page-contents'>

            <Navbar/>



<h1>Summary</h1>
<div className='grid'>

<div class="row">
  <div class='col'>
<div className='container'>
  <div class='title'>Problem</div>
<li>  
  <span className=' highlight-text shown'>
    Travelers having a hard time deciding which backpack fits their needs 
  </span>
</li> 
<li>Depending on the type of traveling, they need certain features with the right capacity</li>
<li>Having the right features and capacity in a backpack is essential.</li>
</div>
</div>

<div class='col'>
<div className='container'>
<div class='title'>Solution </div>
<li>
A concept website that provides 
                <span className=' highlight-text shown'> guidance to find a backpack with the right features, capacity and size. 

                   </span> 
                  </li> 
</div>
</div>

<div class='col'>
<div className='container'>
  <div class='title'>My Role</div>
<li>UX Research, Ui Design</li> 

<div class='title'>Timeline</div>
<li>1 week</li> 

<div class='title'>Tools</div>
<li>Figma</li> 
<li>Adobe Illustrator</li> 



</div>
</div>


</div>



  
</div>

<h1>Approach</h1>

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





         

    <div data-aos="fadeup" >
     
        <section id= "overview">
        <h2 >Overview</h2> 
        </section>
            <p > A UI concept website to help travelers find the perfect backpack. </p>
            <div className='sub-container'>

            
            <div className='group-left'> 
                <h4>Problem</h4>
                <p>
                <span className=' highlight-text shown'>
                Travelers having a hard time deciding which backpack fits their needs 
                </span>
                 . Depending on the type of traveling, they need certain features with the right capacity.  Having the right features and capacity in a backpack is essential.
                </p>

                <h4>Solution</h4>
                <p>A concept website that provides 
                <span className=' highlight-text shown'> guidance to find a backpack with the right features, capacity and size. 

                   </span> 
                    </p> 
            </div>



            <div className='group-right'>
                <h4>My Role</h4>
                <p>UX Research, UI Design</p>

                <h4> Timeline</h4>
                <p> 1 week (Feb 9 - Feb 18 2021)</p>
                <h4> Team Members</h4>
                <p>Solo</p>

                <h4>Tools</h4>
                <p>Figma, Adobe Illustrator</p>
            </div>
            </div>
    </div>                     
        


    <div data-aos="fadeup" >
          
            <h2>Why</h2>
            <p>Finding a backpack may be hard depending on the type of traveling they do and hobbies they may have.
                Some travel for a couple days and bring multiple bags, some travel for a couple months and only bring one bag.
                Having the right features and capacity in a backpack is essential.
         </p>

        

            <h2>Approach</h2>
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


    <div data-aos="fadeup" >
    <section id= "research">

        <h2 >Research</h2>
        </section>

    
 

        <p> To begin researching, I gathered user comments from Reddit forums, r/solotravel, r/onebag, and r/travel. 
            Oftentimes, questions are asked related to “what bag did you take for your x long trip”, 
            users also give a general description of what they choose to pack in their bags. T
            his provided some information distinguish the types of travelers</p>


            <div>
                <img src= '/images/backpack/a.jpg' />
                <img src= '/images/backpack/c.jpg' />
                <img src= '/images/backpack/b.jpg' />
                </div>
            <h3> The Types of Travelers</h3>
            <p> There are many types of travelers out there.
                Some travel for a weekend, a week, a couple months, or up to a couple years .
                <span className='highlight-text shown'>  Some major differences between travelers:</span>
                <li>One bag vs Multiple bags </li> 
                <li>Checked luggage vs Carry-on luggage </li>
             <li>Duration of trip </li>
             <li>Packing necessities 
                 <span className='highlight-text shown'> greatly vary
                 </span>
            </li>
            </p>
         

          
            <h3> The Types of Backpacks</h3>
            <p> While going through some backpacks that users use,
            <span className='highlight-text shown'> One major difference</span> between backpacks is the addtion of a <span className='highlight-text shown'>
            dedicated camera compartment </span>
                 to safely store camera equipment. Additonal features include:
                <li> Top Loading vs Front Loading Backpack </li>
                <li> Water Resistance </li>
                <li> Hip/Chest Straps </li>
            </p>
            
            <h3>User Personas</h3>
                              <p>I have created the following <span className='highlight-text shown'>user personas based on 
                                  traveler backpack usages.</span> </p>
                                <img src= '/images//backpack/John.png' className='user-persona'  />
                                <img src= '/images//backpack/Mary.png'className='user-persona'   />
                                <img src='/images//backpack/Kate.png' className='user-persona'  />
                                <img src= '/images//backpack/George.png' className='user-persona'  />



                             
            
    </div>



                                

    <section id= "design">

            <h2 >Design Process</h2>
            </section>
                 <h3>Brainstorming</h3>
                 <p>While beginning to design the process, there were several questions to consider to determine the right bag. I
                    <span className=' highlight-text shown'> created a flow chart to help eliminate bag options based on the user's needs.  </span>


                </p>      
                                <div>
                                <img src= '/images//backpack/flow.png' className='flow-img'/>
                                </div>
                <p> In this case, 
                    <span className=' highlight-text shown'>deciding if the user needed a bag with camera compartments</span> was the 
                <span className=' highlight-text shown'> most important factor</span> to determine the right bag. 
                    Since this is a technical feature of the bag, it is 
                    <span className=' highlight-text shown'> the main difference between a regular backpack and a camera backpack. </span>
                    The second most important factor is the size of the bag. 
                    Rather than giving the options of “Small, Medium or Large”, we ask if the user will “need to fit everything in this one bag”, 
                    <span className=' highlight-text shown'> eliminating certain bag sizes depending on the answer</span>, followed by “how long is your trip” 
                    to get a better estimate the size of the bag. 
                </p> 
                <p> Ex: If a user only had one bag to bring, this would automatically require a medium or large bag.</p>

                          
                            
          

              <h2> Initial Wireframes</h2>
                <h3>Ideation of Wireframe</h3>
                <p> While the user is going through the process of answering
                    each question, it automatically filters the backpacks depending on the user's answers. Wireframes created in Figma.
                </p>
                </div> 
                </div>

              <div className="row">
                  <div className="Column">
                        <div className="item"> 
                  <img src= '/images//backpack/designv1/w1.png' />
                  <item-caption>Home page for user to begin their bag finder journey.</item-caption>
                        </div>
                  </div>

                  <div className="Column">
                  <div className="item"> 

                  <img src= '/images//backpack/designv1/w2.png' />
                  <item-caption>Users are first asked about a dedicated camera compartment
                      to elimiate majority of bags to their usage.
                         </item-caption>

                        </div>
                  </div>
              </div>

              <div className="row">
                  <div className="Column">
                    <div className="item"> 
                  <img src= '/images//backpack/designv1/w3.png' />
                    <item-caption>This decides whether user will need a small or large bag.</item-caption>
                    </div>
                  </div>

                  <div className="Column">
                    <div className="item"> 
                  <img src= '/images//backpack/designv1/w4.png'  />
                  <item-caption>The trip duration will give a better estimate the size of the bag needed.</item-caption>
                         <div>
                  <item-caption> Ex: A 2 day travel with everything vs 1 month travel with everything.</item-caption>
                        </div>

                    </div>
                  </div>
              </div>

                    <div className="grid">

                    <img src= '/images//backpack/designv1/w5.png'  />
                    <item-caption> After answering all the questions, it will filter out backpack based on the user's needs.</item-caption>

                     

                    </div>
               
                    
           





            <h2> Prototype</h2>
     
            <div className='page-container'>
            <div className='page-contents'>
            <h3>Changes</h3>
            <p> While the intial wireframes only consisted of 4 questions,
                <span class=' highlight-text shown'> I had decided to add another question to the process</span>
                . By having the user                
                 <span className=' highlight-text shown'> estimate the number of items they are bringing,
                this will further enhance the size of the bag needed </span> for the trip. A                 
                <span className=' highlight-text shown'> progress bar</span> was also added
                so user can  <span className=' highlight-text shown'> keep track of their questions and return if needed.  </span>
            </p>
            <p> 
               
                In addtion to the extra question, I have also changed the functionality of the recommended page.
                Initially, each product listing had a horizontal scrolling under each price option.
                In the  <span className=' highlight-text shown'> final version, I had removed the horizontal scrolling and limited it only to veritcal scrolling
                for better viewing purposes</span>
                . However, the user will have to manually select their price filter.
            </p>  
            </div>
            </div>
        
                

            <div className="row">
                  <div className="Column">
                  <div className="item"> 

                  <img src= '/images//backpack/prototype/home.png' />
                  </div>
                  </div>

                  <div className="Column">
                  <div className="item"> 

                    <img src= '/images//backpack/prototype/q1.png' />
                    </div>
                  </div>
              </div>

              <div className="row">
                  <div className="Column">
                  <div className="item"> 

                  <img src= '/images//backpack/prototype/q2.png' />
                  </div>
                  </div>

                  <div className="Column">
                  <div className="item"> 

                    <img src= '/images//backpack/prototype/q3.png'   />
                    </div>
                  </div>
              </div>

              <div className="row">
                  <div className="Column">
                  <div className="item"> 

                  <img src= '/images//backpack/prototype/q4.png' />
                  </div>
                  </div>

                  <div className="Column">
                  <div className="item"> 

                    <img src= '/images//backpack/prototype/Recs.png'   />
                    </div>
                  </div>
              </div>

            <div className='page-container'>
                <div className='page-contents'>



                <section id= "learned">
              <h2 > What I Learned</h2>
              </section>
              <h3>Functional Limitations</h3>
              <p> As mentioned before, packing necessities greatly vary among people.
                  Although having the user estimate the number of items they are bringing on their trip,
                  they could be bringing items that are not listed on that page. I had only made options for common items that would mainly occupy
                    their bag storage. The size of each item can also vary greatly, affecting the size of the bag needed.  </p>
                    <p> Ex: A lightweight jacket vs a winter jacket.</p>

            <h3>Design</h3>
                <p>While this is my first design for a concept website, I knew I wanted to maintain a minimalistic layout throughout all pages.
                    Originally, I had the idea of a green primary color to represent nature while traveling however, the color green I had in mind
                    did not fit in with the secondary colors.
                </p>
                </div>
            </div>
           

    
              </div>

        </div>
    )
}

export default Backpack
