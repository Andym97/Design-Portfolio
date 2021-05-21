import logo from './logo.svg';
import Navbar from './components/Navbar.js';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect, BrowserRouter, HashRouter, useLocation } from 'react-router-dom';
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
  const location=useLocation();

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>

          <AnimatePresence exitBeforeEnter> 
            
          <Switch location={location} key={Location.pathname}>
          <Route  path='/' exact component= {Home} />
          <Route  path='/work' exact component= {Home} />

          <Route  path='https://andym97.github.io/Design-Portfolio/home' exact component= {Home} />


          <Route  path='/projects' exact component= {projects} />
          <Route  path='/projects/okayamadenim' exact component= {okayamadenim} />
          <Route  path='/projects/backpack' exact component= {backpack} />




          <Route  path='/resume' exact component= {Resume} />
          <Route  path='/contact' exact component= {Contact}/>


{/* 
          <Route  path='/404' component= {NotFound}/>
          <Redirect to ="/404"/> */}

          </Switch>
          </AnimatePresence>

      
      </HashRouter> 
 
  

  );
}

export default App;
