import React from 'react'
import web from "../Images/rct.jpg";
import bbypc from "../Images/bbypc.jpg";
import book3 from "../Images/book3.jpg";
import Common from './Common';
import { FaUserCircle } from 'react-icons/fa';

const Home = () => {
  return (
    <>
    <Common 
    name="CREATE YOUR SCHOOL WEBSITE TODAY"
    h2para="School website design for schools all around the world! We can create your school website design for you or you can use our school website builder to create a website for your school. Choose from one of our professionally designed school templates to get started. Try it for free now. No Credit Card Required!"
    imgsrc={web} 
    visit='/service' 
    btnname="School Website Builders"


    header="BUILD YOUR OWN SCHOOL WEBSITE"
    para="Our easy-to-use drag and drop school website builder gives all schools the power to create a stunning school website.  Choose from one of our professionally designed themes to get started. Add your own content, images and colours to create a unique website for your school.  We offer free support directly within our school website builder."
    headerButton="Register Now"
    bbypc={bbypc}

    


  
    
    />
    <section id="headertwo" className="home-header-three">
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row'>
              <div className='col-lg-6 order-1 order-lg-2 my-3'>
              <h1 className='homehone'>LET US CREATE YOUR SCHOOL WEBSITE DESIGN </h1>
              <h4 className='homehfour'>We understand being a teacher or part of the school staff may not allow for time to build your school website and that's why we offer a complete school website design solution.  We can design and build your school website.  We offer affordable prices based on the features you need for your school website.  </h4>
              <button class="button"><span>School Website Design</span></button>
              
            </div>
            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
            <img src={book3} className="image-fluid image-animated-three" alt='homepagepic'/>
              
            </div>
            
              </div>
              </div>
              </div>
              </div>
              </section>

              <section  id="headerfour" className="home-header-four">
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-10 mx-auto  '>
                    <h3 className='text-center'>COMPLIANCE FEATURES </h3>
                      <h1 className='homehone text-center'>Tools Made For Compliance</h1>
                      <div className='row'>
                          <div className="col-lg-5 order-1 order-lg-2 my-3 mx-auto">
                            <i className='font-icon'><FaUserCircle/></i>
                          <h1 className='homehone-h text-center'>GDPR & Privacy</h1>
                          <h1 className='text-center'> ___</h1>
                          <h4 className='my-3 mx-2 homehone-h4'>We provide tools to allow your website users to easily manage their personal data. These tools, in turn, help you to create a GDPR compliant school website that users can trust.</h4>
                          <button className='btn-one'>
                            <h4 className='home-btn'>Find out more</h4>
                            <h5 className='home-btn-h'>GDPR & Privacy</h5>
                          </button>
                        </div>
                        <div className='col-lg-5 order-1 order-lg-2 my-3 mx-auto'>
                        <i className='font-icon'><FaUserCircle/></i>
                        <h1 className='homehone-h text-center'>Accessibilty</h1>
                        <h1 className='text-center'> ___</h1>
                        <h4 className='my-3 mx-2 homehone-h4'>Websites should be accessible to everyone. That's why we provide accessibility solutions to ensure your new school website is accessible and WCAG AA 2.1,EN 301-549 compliant.</h4>
                        <button className='btn-one'>
                            <h4 className='home-btn'>Find out more</h4>
                            <h5 className='home-btn-h'>Accessibilty</h5>
                        </button>



                        </div>
                        
                        

                        </div>

                      </div>

                    </div>
                    
                      
                    
                    
                      
                      
                  
                    
                   

                  </div>
                

              </section>


    
    
             
    
    

    </>
  )
}

export default Home