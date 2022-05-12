import React from 'react'
import Appnavbarcommon from './Appnavbarcommon';
import mbl1 from "../Images/mbl1.jpg";
import mbl2 from "../Images/mbl2.jpg";
import mbl3 from "../Images/mbl3.jpg";
import mbl4 from "../Images/mbl4.jpg";

const Appnavbar = () => {
  return (
    <>
    <Appnavbarcommon 
    name1="A DEDICATED"
    h2para1="Here at My School Design, we are dedicated to enabling schools that rely

    on effective communication with easy-to-use technology. We build
    
    bespoke, user-friendly school apps to provide schools with the tools they
    
    need to keep parents, students and staff in the loop. "
    visit='/service'
    btnname1="Create School App"
    imgsrc1={mbl1}
    content="LET US CREATE YOUR NEW SCHOOL APP"

    name2="How Do We Design School Apps?"
    h2para2="We design your school app to reflect your school image.  Logo and colours are an important part of your school's identity and we make sure that is prevalent in your school app design.  We discuss your goals for the app and implement the features needed to achieve this.  Our main aim here is to create a custom school app that is simple and effective to use."
    imgsrc2={mbl2}

    name3="School App Development"
    h2para3="We can take most of information from your school website when developing your app.  We'll also ask for any additional information and features you'd like us to add. Our dedicated school app team will then build your school app ready for you to review.  We will work with you to ensure your new school app perfect for launch and when it is we will submit your app to Google Play and Apple's app store."
    h2paraa3="Here at My School Design, we are dedicated to enabling schools that rely

    on effective communication with easy-to-use technology. We build
    
    bespoke, user-friendly school apps to provide schools with the tools they
    
    need to keep parents, students and staff in the loop."


    imgsrc3={mbl3}

    name4="Benefits of a School App"
    h2para4="With your own school app, you can communicate with parents, students and staff without ever having to send out a paper newsletter or an SMS message.  By utilising the app's news feed, calendar and free push notification feature you can reduce your communication costs."
    imgsrc4={mbl4}





     />
    </>
  )
}

export default Appnavbar