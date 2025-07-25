import React from 'react'
import { Link } from 'react-router-dom'
import contribute1 from '../../assets/contribute1.webp'
import contribute2 from '../../assets/contribute2.jpg'
import "./Contribute.css"

function Contribute() {
  return (
    <div className='contribute-sec'>
      <img src={contribute1} alt="contribute-pic"/>

      <div className='contribute-main'>
        <h2>Contribute in many ways -</h2>
        <div className='main-sec'>
            <div className='sec-diff'>
                <div className='sec-main'>
                    <h3>Donate Money :-</h3>
                    <p>Support us financially to help more animals in need.</p>
                    <Link to="/Donate"  >
                    <button>Donate Now</button>
                    </Link>
                </div>
                <div className='sec-main'>
                    <h3>Sponsor an Animal :-</h3>
                    <p>Choose an animal to sponsor and take care of its needs.</p>
                    <Link to="/Sponsor">
                        <button>Sponsor Now</button>
                    </Link>
                </div>
                <div className='sec-main'>
                    <h3>Volunteer :-</h3>
                    <p>Give your valuable time and energy to care for animals.</p>
                    <Link to="/Volunteer">
                        <button>Join Us</button>
                    </Link>
                </div>
                <div className='sec-main'>
                    <h3>Spread Awareness :-</h3>
                    <p>Help us reach more people by sharing our mission.</p>
                    <Link to="/Awareness">
                        <button>Share Now</button>
                    </Link>
                </div> 
            </div>
            <div className='main-img'>
                <img src={contribute2} alt="contribute-pic"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contribute