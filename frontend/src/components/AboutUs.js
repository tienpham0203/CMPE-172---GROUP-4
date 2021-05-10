import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class AboutUs extends Component {
    render() {
        return (
            <div>
                <div class="about-section-back">
                    <Link to="/">Go Back</Link>            
                </div>
                <div class="about-section">
                    <h1>About Us Page</h1>
                    <p>Be My Reader is a simple text-to-speech application that allows users to read a paragraph or a sentence that they type into a text box. This can help people who have difficulty reading due to poor eyesight or even help with uncommon vocabulary pronunciation for average users.</p>
                </div>
                <div class="our-team">
                    <h2 styles="text-align:center">Our Team</h2>
                </div>
                
                <div class="row">
                <div class="column">
                    <div class="card">
                    <img src="Jing.jpg" alt="Jing" styles="width:100%"></img>
                    <div class="container">
                        <h2>JingHui Ng</h2>
                        <p>jinghuing@yahoo.com</p>
                    </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                    <img src="Tien.PNG" alt="Tien" styles="width:100%"></img>
                    <div class="container">
                        <h2>Tien Pham</h2>
                        <p>tien.pham@sjsu.edu</p>
                    </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                    <img src="T.jpg" alt="Tien" styles="width:100%"></img>
                    <div class="container">
                        <h2>Ahmad Abuzaina</h2>
                        <p>ahmad.abuzaina@sjsu.edu</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
           
        );
    }
}
export default AboutUs;