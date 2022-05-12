import React from 'react'

const Abcddata = (props) => {
  return (
    <div>
        <div className='card'>
                <div className='card-body'>
                    <img src={props.imgs} className="image-fluid __image" alt='aboutpagepic' />
                    <h2 className='card-title __title'>{props.title}

                    </h2>
                    <h2 className='card-desc __description'>{props.desc}
                        
                    </h2>
                    <button className='card--btn __btn'>Create Website</button>
                </div>
            </div>
    </div>
  )
}

export default Abcddata