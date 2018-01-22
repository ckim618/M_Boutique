import React from 'react';
import './style.css';
import macaronImage from '../assets/images/macarons-image.png';
import welcome from '../assets/images/welcome-image.png';
import chocolate from '../assets/images/chocolate.png';
import coconut from '../assets/images/coconut.png';
import violetCassis from '../assets/images/violet-cassis.png';
import greenTea from '../assets/images/green-tea.png';
import passionFruit from '../assets/images/passion-fruit.png';
import vanilla from '../assets/images/vanilla.png';
import coffee from '../assets/images/coffee.png';
import pistachio from '../assets/images/pistachio.png';
import raspberry from '../assets/images/raspbery.png';
import lemon from '../assets/images/lemon.png';
import rose from '../assets/images/rose.png';
import tiffanyBlue from '../assets/images/tiffany-blue.png';
import caramel from '../assets/images/caramel.png';
import almond from '../assets/images/almond.png';

export default () => (
      <div>
          <img className="coverImg" src={welcome}/>
          <div className="imgContainer">
              <img className="macaronImg" src={macaronImage}/>
          </div>
          <div className="sectionDescription">
              <p className="mainSectionHeaders">Welcome to MBoutique</p>
              <p className="mainParagraphs">We're a home-based baking business that specializes in the making of French macarons, a gluten-free pastry item made from fround almods.  Our business began at the West Reading Farmers Market in 2011.  Last year (2013) marked our third and final season of participation at the market. MBoutique was established to pay homage to the delicate French confectionery, the marcaron.  Our shop has been recognized as the connoisseurs of this delicious French pastry because of the wonderful variety of flavors from our great master chefs.</p>
              <p className="mainSectionHeaders">We Love Macarons!</p>
              <p className="mainParagraphs">Renowned macarons, French Delights of the moment can be met in a variety of flavors and colors and are brilliant precisely because of their simplicity - a crispy coating, but delicate in a loose blanket jam, chocolate butter cream is spread inviting.</p>
              <p className="mainParagraphs">Macarons combines perfectly with champagne or white wine, tea or hot chocolate, fresh juices and natural fruit favored coffee and guarantee that these little delights soon become friends that you can not break. </p>
              <br/>
              <div>
                  <p className="mainSectionHeaders">Find the flavor that you like.  Try a sample every day!</p>
              </div>
          </div>
          <div className="flavorContainer">
              <div className="sampleFlavors">
                  <p className="date">Monday</p>
                  <p className="info">15:00-16:00</p>
                  <div className="sampleScetion1">
                      <div className="bottomSample">
                          <p className="info">chocolate</p>
                          <img className="imgSmall" src={chocolate}/>
                      </div>
                      <div className="bottomSample coconutSample">
                          <p className="info flavorText">coconut</p>
                          <img className="imgSmall" src={coconut}/>
                      </div>
                  </div>
              </div>
              <div className="sampleFlavors">
                  <p className="date">Tuesday</p>
                  <p className="info">14:00-15:00</p>
                  <div className="bottomSample">
                      <p className="info">violet cassis</p>
                      <img className="imgSmall" src={violetCassis}/>
                  </div>
                  <div className="bottomSample">
                      <p className="info">green tea</p>
                      <img className="imgSmall" src={greenTea}/>
                  </div>
              </div>
              <div className="sampleFlavors">
                  <p className="date">Wednesday</p>
                  <p className="info">09:00-10:00</p>
                  <div className="bottomSample">
                    <p className="info">passion fruit</p>
                    <img className="imgSmall" src={passionFruit}/>
                  </div>
                  <div className="bottomSample vanillaSample">
                      <p className="info flavorText">vanilla</p>
                      <img className="imgSmall" src={vanilla}/>
                  </div>
              </div>
              <div className="sampleFlavors">
                  <p className="date">Thursday</p>
                  <p className="info">18:00-19:00</p>
                  <div className="bottomSample">
                      <p className="info">coffee</p>
                      <img className="imgSmall" src={coffee}/>
                  </div>
                  <div className="bottomSample">
                      <p className="info">pistachio</p>
                      <img className="imgSmall" src={pistachio}/>
                  </div>
              </div>
              <div className="sampleFlavors">
                  <p className="date">Friday</p>
                  <p className="info">11:00-12:00</p>
                  <div className="bottomSample">
                      <p className="info">raspberry</p>
                      <img className="imgSmall" src={raspberry}/>
                  </div>
                  <div className="bottomSample lemonSample">
                      <p className="info flavorText">lemon</p>
                      <img className="imgSmall" src={lemon}/>
                  </div>
              </div>
              <div className="sampleFlavors">
                  <p className="date">Saturday</p>
                  <p className="info">13:00-14:00</p>
                  <div className="bottomSample">
                      <p className="info">rose</p>
                      <img className="imgSmall" src={rose}/>
                  </div>
                  <div className="bottomSample">
                      <p className="info">tiffany blue</p>
                      <img className="imgSmall" src={tiffanyBlue}/>
                  </div>
              </div>
              <div className="sampleFlavors">
                  <p className="date">Sunday</p>
                  <p className="info">10:00-11:00</p>
                  <div className="bottomSample ">
                      <p className="info">caramel</p>
                      <img className="imgSmall" src={caramel}/>
                  </div>
                  <div className="bottomSample almondSample">
                      <p className="info flavorText">almond</p>
                      <img className="imgSmall" src={almond}/>
                  </div>
              </div>
          </div>
      </div>
)