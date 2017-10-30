import React from 'react';
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import Nav from './nav';
import Footer from './footer';import MainSection from './mainSection';





const Home = () => (
    <Router>
        <div>
            <Nav/>
            <Footer/>
        </div>
    </Router>
);

export default Home;
