import React from 'react';
import giftParties from '../assets/images/gifts-parties-image.png';
export default () => (
    <div>
        <img className="coverImg" src={giftParties}/>
        <div className="giftSection1">
            <p className="mainSectionHeaders">Let's eat macarons!</p>
            <p className="mainParagraphs">
                We make it easy to share la passion du macaron with your friends, family and colleagues.  Choose from our array of premium gift options, or we<br/>
                can create a custom solution.  Contact us when you need help planning your celebration! <span className="contactEmail">orders@mboutique.com</span>
            </p>
            <br/>
            <p className="mainSectionHeaders">Gift boxes</p>
            <div className="mainParagraphs">
                <p>Our signature gift boxes make macarons the perfect gift for any occasion</p>
                <ul>
                    <li>gift box of 6 macarons in raspberry white - $10</li>
                    <li>gift box of 12 macarons in white, pistachio, or violet - $20</li>
                    <li>gift box of 24 macarons in violet - $40</li>
                    <li>gift box of 36 macarons in silver - $60</li>
                    <li>gift box a la ronde of 60 macarons in violet or silver - $120</li>
                </ul>
            </div>
            <br/>
            <p className="mainSectionHeaders">Party Tower</p>
            <div className="mainParagraphs">
                <p>Our 5-tiered party tower becomes the centerpiece of an special event or private<br/>
                   celebration, elegantly presenting your unique selection of sixty maracons.
                </p>
                <ul>
                    <li>tower of 60 macarons - $120</li>
                </ul>
            </div>
        </div>
        <div className="giftSection2"></div>
    </div>
);