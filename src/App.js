import logo from './logo.svg';
import Navbar from './components/Navbar.js';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect, BrowserRouter, HashRouter } from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion'

import Home from './components/pages/Home';
import projects from './components/pages/projects';
import NotFound from './components/pages/404.js';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import okayamadenim from './components/pages/projects/okayamadenim';
import backpack from './components/pages/projects/backpack';



import {CSSTransition, Transition, TransitionGroup,} from 'react-transition-group'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>


          <AnimatePresence > 
            
          <Switch>
          <Route  path='/https://andym97.github.io/Design-Portfolio/' exact component= {Home} />
          <Route  path='/work' exact component= {Home} />

          <Route  path='/projects' exact component= {projects} />
          <Route  path='/projects/okayamadenim' exact component= {okayamadenim} />
          <Route  path='/projects/backpack' exact component= {backpack} />
      <div> <p> hello</p></div>




          <Route  path='/resume' exact component= {Resume} />
          <Route  path='/contact' exact component= {Contact}/>


{/* 
          <Route  path='/404' component= {NotFound}/>
          <Redirect to ="/404"/> */}

          </Switch>
          </AnimatePresence>

      
      </Router> 
 
  

  );
}

export default App;
