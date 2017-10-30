import React from 'react';
import './style.css';
import macaronImg from '../assets/images/our-macarons-image.png';
import ourMacaron from '../assets/images/our-macarons-background.png';

export default () => (
    <div>
        <img className="coverImg" src={macaronImg}/>
        <div className="ourMacaronContainer">
            <div className="ulDiv">
                <p className="mainSectionHeaders">Our Macarons are freshly made by hand</p>
                <p className="mainParagraphs">The vivid hues of our unique macarons reflect the natural flavors and essences that infuse the ganache filling of these delicious almond cookies-each has its own personality, and all of them are made to savour for their delicacy and unique character</p>
                <p className="mainSectionHeaders">Classics</p>
                <ul className="mainParagraphs ulList">
                    <li>caribbean chocolate</li>
                    <li>coconut</li>
                    <li>colombian coffee</li>
                    <li>green tea</li>
                    <li>lemon</li>
                    <li>madagascar vanilla</li>
                    <li>passion fruit</li>
                    <li>rose</li>
                    <li>raspberry</li>
                    <li>tiffany blue</li>
                    <li>sicilian pistachio</li>
                    <li>sweet wedding almond</li>
                    <li>violet cassis</li>
                    <li>salted caramel</li>
                </ul>
            </div>
                <div>
                    <img className="ourMacaronImg" src={ourMacaron}/>
                </div>
        </div>
    </div>
);