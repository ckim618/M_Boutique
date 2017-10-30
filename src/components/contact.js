import React from 'react';
import map from '../assets/images/contact-image.png';
import macaron from '../assets/images/macarons-image.png';

export default () => (
    <div>
        <img src={map}/>
        <div className="contactThirds">
            <div className="contactSection1">
                <p className="mainSectionHeaders">Visit Us!</p>
                <p className="mainParagraphs">
                    Monday-Friday | 10am-9pm<br/>
                    Saturday |10am-8pm<br/>
                    Sunday | 11am-7pm<br/>
                    Closed Thanksgiving Day, Christmas Day and<br/>
                    Easter
                </p>
                <p className="mainParagraphs">
                    1625 Post St<br/>
                    San Francisco, CA 94115
                </p>
                <p className="mainParagraphs"> 949.800.3111 </p>
                <p className="contactEmail">order@mboutique</p>
                <p className="mainParagraphs">
                    Send your questions, comments and flavor<br/>
                    suggestions or place an order!
                </p>
            </div>
                <div className="contactSection2">
                    <p className="mainSectionHeaders">Contact Form</p>
                    <form>
                        <label>
                            <input className="contactInput" type="text" value="Name"/>
                        </label>
                        <label>
                            <input className="contactInput" type="text" value="Email"/>
                        </label>
                        <label>
                            <input className="contactInput" type="text" value="Phone"/>
                        </label>
                        <label>
                            <input className="contactInput" type="text" value="Subject"/>
                        </label>
                        <label>
                            <input className="contactInputMesssage" type="text" value="Message"/>
                        </label>
                        <div className="inputSubmitContainer">
                            <input className="inputSubmit"type="submit" value="Submit"/>
                        </div>
                    </form>
                </div>
            <img className="contactSection3" src={macaron}/>
        </div>
    </div>
);