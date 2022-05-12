import React from 'react'
import { NavLink } from 'react-router-dom'


const Common = (props) => {
  return (
    <>
    <section id="header" className="home-header">
      <div className='container-fluid nav-bg'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row'>
            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
              <h1>{props.name}</h1>
              <h3>{props.h2para}</h3>
              
              <h2 className='my-3'>We are the team of talented website makers</h2>
              <div className='mt-3'>
                <NavLink to={props.visit} className='btn-group'>{props.btnname}</NavLink>
                <NavLink to={props.visit} className='btn-try'>Try Platform For Free</NavLink>
              </div>
              
              
            </div>
            <div className='col-lg-6 order-1 order-lg-2 '>
              <img src={props.imgsrc} className="image-fluid image-animated" alt='homepagepic' />
            </div>
          </div>
         
             
              
          </div>
        </div>

      </div>

    </section>

    <section id="headertwo" className="home-header-tow">
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row'>
              <div className='col-lg-6 order-1 order-lg-2 '>
              <img src={props.bbypc} className="image-fluid image-animated-one" alt='homepagepic' />
            </div>
            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
              <h1 className='homehone'>{props.header}</h1>
              <h4 className='homehfour'>{props.para}</h4>
              <button class="button"><span>{props.headerButton}</span></button>
            </div>
            
              </div>
              </div>
              </div>
              </div>
              </section>

     
              
    </>
  )
}

export default Common