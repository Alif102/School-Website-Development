import React from 'react'
import { Container ,Row, Col } from 'react-bootstrap';
import {AiFillFileText} from "react-icons/ai"
import {BsFillFileTextFill} from "react-icons/bs"
import { FaPaintBrush} from "react-icons/fa"
import {BiConversation} from "react-icons/bi"
import {RiContactsFill} from "react-icons/ri"

const Features = () => {
  return (
    <>
    <section className='feature-sec'>
        <div>
            <div className='row'>
                <div className='col-lg-6 mx-auto'>
                <h1 className='features-header my-1'>School App Features</h1>
                <p className='f-para'>Our school apps come fully loaded with amazing features.</p>
                <p className='f-para'>Below are just some of the features our builder provides.</p>
                </div>

            </div>
            <div className='row'>
            <div className='col-lg-10 mx-auto'>
                    <Container className='f-container'>
                        <Row>
                            <Col>
                            <i className='feature-icon'><AiFillFileText/></i>
                            <h3 className='f-col my-3'>No Coding Skill</h3>
                            <p className='f-col-para my-5'>You don't need to worry about complicated code.  We will take care of everything and create your school app for you.</p>
                            </Col>
                            <Col>
                            <i className='feature-icon'><FaPaintBrush/></i>
                            <h3 className='f-col'>BESPOKE APP DESIGN</h3>
                            <p className='f-col-para'>We'll create a bespoke app design for your school that matches your existing school branding and identity</p>
                            </Col>
                            <Col>
                            <i className='feature-icon'><BiConversation/></i>
                            <h3 className='f-col'>SUBMISSION TO STORES</h3>
                            <p className='f-col-para'>Once your new school app is ready we will submit it directly to the Google Play Store and Apple's App Store.</p>
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                            <i className='feature-icon'><BsFillFileTextFill/></i>
                            <h3 className='f-col'>APP ADMIN ACCESS</h3>
                            <p className='f-col-para'>As soon as your app is launched you will get admin access so you can easily manage the app going forward.</p>
                            </Col>
                            <Col>
                            <i className='feature-icon'><BiConversation/></i>
                            <h3 className='f-col'>Dedicated Support</h3>
                            <p className='f-col-para'>We are here to support you.  We will show you have to manage your app and send push notifications.</p>
                            </Col>
                        
                            
                            <Col>
                            <i className='feature-icon'><RiContactsFill/></i>
                            <h3 className='f-col'>PUSH NOTIFICATION</h3>
                            <p className='f-col-para'>Send reminders and messages to every app user. Each app subscription comes with unlimited push notifications.

</p>
                            </Col>
                        </Row>
                        </Container>
                        <div className='col-lg-8 fea-last-div'>
                            <p className='f-col-para'>Regardless of the size or type of your school, I suggest that before your begin your search, keep in mind the features you’ll need the most, and find a mobile app provider who can deliver those.</p>
                        </div>

            </div>

            
                </div>
           
        </div>
    
    </section>
    </>

  )
}

export default Features