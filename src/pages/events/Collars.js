import React from 'react'
import collar1 from "../../assets/collars1.jpg"
import collar2 from "../../assets/collars2.jpg"
import collar3 from "../../assets/collars3.jpg"
import collar4 from "../../assets/collars4.avif"
import collar5 from "../../assets/collars5.jpeg"
import collar6 from "../../assets/collars6.jpeg"
import collar7 from "../../assets/collars7.webp"
import collar8 from "../../assets/collars8.webp"
import collar9 from "../../assets/collars9.jpg"
import collar10 from "../../assets/collars10.jpg"
import "./Collars.css"

export default function Collars() {
  return (
    <div className='collar-sec'>
      <img src={collar10} alt="collar-pic"/>


      <div className='collar-intro'>
        <h3><strong>Collars for Compassion:</strong> A Small Collar, A Big Difference</h3>
        <div className='collar-des'>
          <ul>
            <li><strong>Date:</strong>December 2024</li>
            <li><strong>Location:</strong>Rural Road Sectors, Udaipur</li>
            <li><strong>Event Type:</strong>Animal Safety Drive</li>
          </ul>
          <div className='collar-des-sec'>
            <p>The “Collars for Compassion” campaign was a thoughtful initiative aimed at saving the lives of stray animals in rural parts of Udaipur. These areas often lack proper street lighting, making strays highly vulnerable to nighttime accidents.<br/>
            Our mission was simple yet impactful — to equip stray dogs, cats, cows, and other animals with glow-in-the-dark reflective collars so that they are easily visible to drivers after dark. The event was not only about preventing accidents but also about spreading awareness in rural communities regarding animal safety and compassion.</p>
            <img src={collar2} alt="collar-pic"/>
          </div>
        </div>

        <div className='collar-evt'>
          <h4>What Happened During the Event:</h4>
          <div className='collar-evt-sec'>
            <ul>
              <li>Volunteers covered long stretches of unlit roads and village crossings.</li>
              <li>With patience and care, they placed soft reflective collars on hundreds of stray animals.</li>
              <li>Locals were educated about the importance of animal visibility and encouraged to care for the collared animals.</li>
              <li>Many villagers even joined hands with our volunteers during the drive!</li>
            </ul>
            <img src={collar4} alt="collar-pic"/>
          </div>
        </div>

        <div className='collar-impact'>
          <h4>Impact:</h4>
          <div className='collar-impact-sec'>
            <ul>
              <li>300+ stray animals now walk the roads a little safer at night.</li>
              <li>Drivers in the area have reported better visibility and have become more cautious.</li>
              <li>The event sparked conversations about animal rights and safety even in the most remote corners.</li>
            </ul>
            <img src={collar5} alt="collar-pic"/>
          </div>
          <p><i><strong>"Every collar we placed wasn’t just safety — it was love made visible."</strong></i></p>
        </div>
      </div>

      <div className='collar-images'>
        <h3>Glimpse Of Events</h3>
        <div className='collar-img-sec'>
          <img src={collar6} alt="collar-pic"/>
          <img src={collar7} alt="collar-pic"/>
          <img src={collar8} alt="collar-pic"/>
        </div>
        <div className='collar-img-sec'> 
          <img src={collar9} alt="collar-pic"/>
          <img src={collar3} alt="collar-pic"/>
        </div>
        <div className='collar-img-sec'>
          <img src={collar1} alt="collar-pic"/>
        </div>
      </div>
    </div>
  )
}