import React from "react";

const Caaard = (props) => {


  return (
    <>
      <section className="main-card--cointainer">
        

          
            <>
              <div className="card-container">
                <div className="card ">
                  <div className="card-body">
                
                    <img src={props.imgsrc} alt="images" className="card-media" />
                    
                    <h2 className="card-title"> {props.title} </h2>
                    <p className="card-description">
                      {props.desc}
                    </p>
                    
                  </div>
                  
                </div>
              </div>
            </>
          
      </section>
    </>
  )
}
export default Caaard;
