import React from 'react'
import {NavLink} from "react-router-dom"
import bbypcc from "../Images/bubt-logo.jpg"
import {FaSchool} from "react-icons/fa";


const LOGIN = () => {
  return (
    <section>

      <div className='row logform'>
        <div className='col-lg-10 mx-auto'>
          <div className='row'>
            <div className='col-lg-6'>
			<i className='logform-icon'><FaSchool/></i>

              <h2 className='logform-h2' >My School Website Design</h2>
            </div>
            <div className='col-lg-6'>
            <div>
      <div Class="container h-100">
		<div Class="d-flex justify-content-center h-100">
			<div Class="user_card">
				<div Class="d-flex justify-content-center">
        <div Class="brand_logo_container">
						<img src={bbypcc} Class="brand_logo" alt="Logo"/>
					</div>
				
				</div>
				<div Class="d-flex justify-content-center form_container">
					<form>
						<div Class="input-group mb-3">
							<div Class="input-group-append">
								<span Class="input-group-text"><i Class="fas fa-user"></i></span>
							</div>
							<input type="text" name="" Class="form-control input_user" value="" placeholder="username"/>
						</div>
						<div Class="input-group mb-2">
							<div Class="input-group-append">
								<span Class="input-group-text"><i Class="fas fa-key"></i></span>
							</div>
							<input type="password" name="" Class="form-control input_pass" value="" placeholder="password"/>
						</div>
						<div Class="form-group">
							<div Class="custom-control custom-checkbox">
								<input type="checkbox" Class="custom-control-input" id="customControlInline"/>
								<label Class="custom-control-label" for="customControlInline">Remember me</label>
							</div>
						</div>
							<div Class="d-flex justify-content-center mt-3 login_container">
				 	<button type="button" name="button" Class="btn login_btn">Login</button>
				   </div>
					</form>
				</div>
        <div Class="mt-4">
					<div Class="d-flex justify-content-center links">
						Don't have an account? <NavLink to="#" ClassName="ml-2">Sign Up</NavLink>
					</div>
					<div Class="d-flex justify-content-center links">
						<NavLink to="#">Forgot your password?</NavLink>
					</div>
				</div>
		
				
			</div>
		</div>
	</div>
    </div>
            </div>
          </div>
        </div>

      </div>
     
				
		
    </section>


  
   
              
              
              
            



    
  )
}

export default LOGIN