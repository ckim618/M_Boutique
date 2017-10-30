import React from 'react';
import './style.css';
import mail from '../assets/images/mail.png';
import phone from '../assets/images/phone.png';
import facebook from '../assets/images/facebook.png';
import twitter from '../assets/images/twitter.png';

export default () => (
    <div>
        <footer className="footer">
            <div className="footerP">
                <div className="footerTop">
                    <img id="mailIcon" src={mail}/>
                    <p>order@mboutique.com</p>
                </div>
                <div className="footerTop">
                    <img id="phoneIcon" src={phone}/>
                    <p>949.800.3111</p>
                </div>
                <div className="footerTop">
                    <p>Follow Us</p>
                    <img id="facebookIcon" src={facebook}/>
                    <img id="twitterIcon" src={twitter}/>
                </div>
            </div>
            <div id="copyrightContainer">
                <p id="copyright">Copyright &copy; 2017 MBoutique. All rights reserved.</p>
            </div>
        </footer>
    </div>
);