import React, { Component } from 'react'
import '../Footer.css';
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer >
                    <div className = "footer">
                        <h3>Voando Alto</h3>
                        <p>"Almejamos que as viagens nos sonhos torne-se realidade amanhã!"</p>
                        <ul class="socials">
                            <li>
                              <FaFacebook/>
                            </li>

                            <li>
                              <FaInstagram/>
                            </li>

                            <li>
                              <FaLinkedin/>
                            </li>

                        </ul>
                        <p>copyright &copy;2022 Voando Alto.</p>
                        
                            
                       


                    </div>
                      
                     
                </footer>
            </div>
        )
    }
}

export default FooterComponent