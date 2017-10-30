import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import './style.css'
import logo from '../assets/images/logo.png';
import Macarons from './macarons';
import MainSection from './mainSection';
import GiftsParties from './giftsParties';
import Contact from './contact';



export default () => (
  <Router>
      <div>
          <nav className="nav">
              <div className="imgContainer">
                  <img src={logo}/>
              </div>
              <Link to="/" className="mainNav">Welcome</Link>
              <Link to="/macarons" className="mainNav">Our Macarons</Link>
              <Link to="/gifts&parties" className="mainNav">Gifts & Parties</Link>
              <Link to="/contact" className="mainNav">Contact</Link>
          </nav>
          <Route exact path="/" component={MainSection}/>
          <Route path="/macarons" component={Macarons}/>
          <Route path="/gifts&parties" component={GiftsParties}/>
          <Route path="/contact" component={Contact}/>
      </div>
  </Router>
);