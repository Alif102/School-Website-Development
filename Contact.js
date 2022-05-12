import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import {BiTime} from "react-icons/bi";
import {FaHandshake} from "react-icons/fa";

const Contact = () => {

  const [data,setData]=useState({
    fullname:"",
    schoolname:"",
    phone:"",
    email:"",
    msg:"",
  });

  const inputEvent=(event)=>{
    const {name,value}=event.target;
    setData((preVal)=>{
      return{
        ...preVal,
          [name]: value
        
    };
    });
  };

  const formSubmit =(e)=>{
    e.preventDefault()
    alert(`My Name is ${data.fullname}, My Mobile Number is ${data.phone}, My Email is ${data.email}, Here is what i want to say ${data.msg}`) 

  } ;



  return (
    <div>
      <div className='con-main'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 mx-auto'>
            <div className='row'>
              <div className='col-lg-6'>
                
                <h1 className='homehone'>Contact Us</h1>
                <br/>
                <br/>
                <h4 className='homehfour'>We are proud to work with schools all over the world and we hope to work with you soon!</h4>
                <br/>
                <h4 className='homehfour'>If you have any questions contact us by email, live chat or completing the contact form.</h4>

                <div className='row'>
                <div className='col-lg-2'>
                  <i className='f-icon'><MdEmail/></i>
                  
                </div>

                

                <div className='col-lg-4'>
                < h4 className='logo-hb'>Email</h4>
                <h4 className='logo-h'>alifahmed102@gmail.com</h4>

                 
                </div></div>

                <div className='row'>
                <div className='col-lg-2'>
                  <i className='f-icon'><BiTime/></i>
                  
                </div>

                

                <div className='col-lg-4'>
                <h4 className='logo-hb'>Office Hours</h4>
                <h4 className='logo-h'>9 am - 6 pm (UK time) Monday to Friday</h4>
                 
                </div></div>

                <div className='row'>
                <div className='col-lg-2'>
                  <i className='f-icon'><FaHandshake/></i>
                  
                </div>

                

                <div className='col-lg-4'>
                <h4 className='logo-hb'>Support Guides</h4>
                <h4 className='logo-h'>Free School Website Design Course</h4>
                 
                </div></div>   
                
              </div>

              <div className='col-lg-5'>
               

                <div className='card card-contact-div'>
                <h4 className='my-4 mx-2 homehone-h4'>Please use the contact form and we will get back to you shortly.</h4>
                    <form onSubmit={formSubmit}>
                      <div class="form-group">
                        <label for="exampleFormControlInput1">Contact Name :</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={inputEvent} placeholder="Full Name"/>
                      </div>
                      <div class="form-group">
                        <label for="exampleFormControlInput1">School Name :</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" name="schoolname" value={data.schoolname} onChange={inputEvent} placeholder="Institute Name"/>
                      </div>

                      <div class="form-group">
                        <label for="exampleFormControlInput1">Mobile No :</label>
                        <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={inputEvent} placeholder="Phone Number"/>
                      </div>

                      <div class="form-group">
                        <label for="exampleFormControlInput1">Email address :</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={inputEvent} placeholder="name@example.com"/>
                      </div>


                      
                      
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Massage </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={inputEvent}></textarea>
                      </div>
                      <div class="form-check my-3">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                        I accept the Privacy Policy & Terms & Conditions
                        </label>
                      </div>
                      <div className='col-12 my-2'>
                      <button type="submit" className='submit-btn'>Submit Form</button>
                      </div>
                    </form>
              </div>
              </div>



            </div>
            
            
            
          </div>
        </div>
      </div>

    </div>
    </div>
      
      
      

    
  )
}

export default Contact