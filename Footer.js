import React from 'react'
import {FaSchool} from "react-icons/fa"

const Footer = () => {
  return (
    <>
    <footer className='footer-div'>
    <div className='row'>
        <div className='col-lg-12 mx-auto'>
            <div className='row'>
            <div className='col-lg-3'>
                <div>
                    <i className='logform-icon'><FaSchool/></i>

                    <h3 className='footer-h3'>My School Design</h3></div>
            </div>
            <div className='col-lg-3'>
                <div className=''>
                    <h2 className='footer-h2'>Menu</h2>
                </div>
                <ul className='footer-ul'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Features</li>
                    <li>Service</li>
                    <li>Contact</li>
                    <li>LogIn</li>
                    <li>Accessibilty</li>
                    <li>GDPR & Privacy</li>
                </ul>

            </div>
            <div className='col-lg-3'>
                <div className=''>
                    <h2 className='footer-h2'>Important Links</h2>
                </div>
                <ul className='footer-ul'>
                    <li>Terms And Conditions</li>
                    <li>Privacy and Policy</li>
                    <li>Cockie Policy</li>
                    <li>Data Request</li>
                    <li>Accessibilty Statement</li>
                   
                </ul>

            </div>
            <div className='col-lg-3'>
                <div className='footer-ul'>
                    <h2 className='footer-h2'>Subscribe</h2>
                </div>
                <div class="form-group">
                        <label for="exampleFormControlInput1 ">Email address :</label>
                        <input type="email" class="footer-control" id="exampleFormControlInput1" name="email" placeholder="name@example.com"/>
                      </div>
                      <div class="form-check my-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                        I consent to my submitted data being collected and stored as detailed in My School Design's Privacy Policy.
                        </label>
                      </div>
                      <div className='col-12 my-2'>
                      <button type="submit" className='submit-btn'>Subscribe</button>
                      </div>

            </div>


            
            </div>
            

            
            
        </div>
    </div>
    
    </footer>
    <div className='footer-div2'>
        <p>© 2022 My School Design Limited. Company Number: 01797470501.  All Rights Reserved.</p>
    </div>
    
    
    </>
  )
}

export default Footer