import React from 'react'
import abb from "../Images/abb.jpg";


const About = () => {
  return (
    <>

    <h3 className='ab-div'>ABOUT MY SCHOOL DESIGN</h3>
    <p className='ab-div'>We're always here to support you with your website. </p>
    <div className='row ab-row'>
      <div className='col-lg-10 mx-auto'>
        <div className='row'>
          <div className='col-lg-5'>
            <img src={abb} className="image-fluid image-animated-tow" alt='aboutpagepic' />
          </div>
          <div className='col-lg-5'>
            <p className='abb-p'>Welcome to My School Design.  We are a dedicated service exclusively for the education sector. Our website services have been developed from our years of experience working with schools and teachers supporting their IT and communication needs.</p>
            <p className='abb-p'>We understand that all schools have different needs but equally, they have the same goals. In this technology-driven world we live in, parents, students and staff rely on effective communication from schools. For that reason, we have developed My School Design to make it easier for schools to get their information online in a user-friendly way.</p>
            <p className='abb-p'>Our flagship school website builder gives schools the power to design, update and maintain their website. Everything needed for your site to go live is included in the website builder plan.</p>
          </div>
          <p className='abb-p'>We also provide a complete school website design and school app development service.  Although we are based in the U.K. we work with schools all over the world and pride ourselves on making the whole process simple.</p>
          <p className='abb-p'>We're always here to support you with your website.  That's why we provide free support, video guides and courses.</p>
          <p className='abb-p'>We're excited to work with you!</p>

        </div>
      </div>
    </div>
    <div className='row ab-row'>
      <div className='col-lg-10 mx-auto'>
        <div className='row'>
          <div className='col-lg-4'>
            <button className='ab-btn'>Build Your Own Website</button>
          </div>
          <div className='col-lg-4'>
            <button className='ab-btn'>School App Design</button>
          </div>
          <div className='col-lg-4'>
            <button className='ab-btn'>School Website Design</button>
          </div>
        </div>


      </div>
    </div>
    

    </>
  )
}

export default About