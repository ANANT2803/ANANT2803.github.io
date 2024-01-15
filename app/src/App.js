import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginValue } from './LoginContext';

import NavBar from './NavBar.js'
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Initiatives from './Initiatives';
import Media from './Media';
import Gallery from './Gallery';
import Services from './Services';
import Contact from './Contact.js';
import Profile from './profile.js';

const App = () => {

  return (
    <LoginValue>
      <Router>
        <div className = 'App'>
          { <NavBar/> }
          <Routes>
            <Route exact path = '/' element = { <Home /> } />
            <Route exact path = '/initiatives' element = { <Initiatives /> } />
            <Route exact path = '/media' element = { <Media /> } />
            <Route exact path = '/gallery' element = { <Gallery /> } />
            <Route exact path = '/services' element = { <Services /> } />
            <Route exact path = '/login' element = { <Login /> } />
            <Route exact path = '/register' element = { <Register /> } />
            <Route exact path = '/profile' element = { <Profile /> } />
            <Route exact path = '/contact' element = { <Contact /> } />
          </Routes>
        </div>
      </Router>
    </LoginValue>
  );
};

export default App;