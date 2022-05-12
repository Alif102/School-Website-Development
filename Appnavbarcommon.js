import React from 'react'
import { NavLink } from 'react-router-dom'

const Appnavbarcommon = (props) => {
  return (
    <div>
      <section id="header" className="home-header">
      
      <div className='container-fluid nav-bg'>
        <div className='row row1'>
          <div className='col-10 mx-auto'>
            <div className='row'>
            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
            <h1 className='app-nav-div'>{props.name1}</h1>
            <h1><strong className='brand-name'>School APP</strong></h1>
            <h3>{props.h2para1}</h3>
            <div className='mt-3'>
                <NavLink to={props.visit} className='btn-group'>{props.btnname1}</NavLink>
            </div>
           </div>

           <div className='col-lg-6 order-1 order-lg-2 '>
              <img src={props.imgsrc1} className="image-fluid app-image-animated" alt='homepagepic' />
            </div>


        </div>
        </div>
        </div>
        </div>
      </section>
      <section>
          <div>
              <h1 className='app-div-two'>{props.content}</h1>
          </div>
      </section>

      <section>

      <div className='container-fluid nav-bg'>
        <div className='row row1 my-4'>
          <div className='col-10 mx-auto'>
            <div className='row'>
            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
            <h1 className='app-nav-div'>{props.name2}</h1>
            <h3 className='app-nav-div-p'>{props.h2para2}</h3>
            </div>
            <div className='col-lg-6 order-1 order-lg-2 '>
              <img src={props.imgsrc2} className="image-fluid app-image-animated" alt='homepagepic' />
            </div>
            </div>
            
            </div>
            </div>
            </div>

      </section>


      <section>

      <div className='container-fluid nav-bg'>
        <div className='row row1 my-4'>
          <div className='col-10 mx-auto'>
            <div className='row'>
            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
            <img src={props.imgsrc3} className="image-fluid app-image-animated" alt='homepagepic' />
            
            </div>
            <div className='col-lg-6 order-1 order-lg-2 '>
            <h1 className='app-nav-div'>{props.name3}</h1>
            <h3 className='app-nav-div-p'>{props.h2para3}</h3>
            <h3 className='app-nav-div-p'>{props.h2paraa3}</h3>

              
            </div>
            </div>
            
            </div>
            </div>
            </div>

      </section>

      <section>

      <div className='container-fluid nav-bg'>
        <div className='row row1 my-4'>
          <div className='col-10 mx-auto'>
            <div className='row'>
            <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
            <h1 className='app-nav-div'>{props.name4}</h1>
            <h3 className='app-nav-div-p'>{props.h2para4}</h3>
            </div>
            <div className='col-lg-6 order-1 order-lg-2 '>
              <img src={props.imgsrc4} className="image-fluid app-image-animated" alt='homepagepic' />
            </div>
            </div>
            
            </div>
            </div>
            </div>

      </section>
      
      

    </div>
  )
}

export default Appnavbarcommon