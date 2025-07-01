import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            {/* <img src="" alt="" /> */}
        </div>
        <div className="services-container">
            {Services_Data.map((services, index) => {
                return <div key={index} className="serices-format">
                    <h3>{services.s_no}</h3>
                    <h2>{services.s_name}</h2>
                    <p>{services.s_desc}</p>
                    <div className="service-readmore">
                        <p>Read More</p>
                        <img src="" alt="" />
                    </div>
                    
                </div>
            })}
        </div>
    </div>
  )
}

export default Services
