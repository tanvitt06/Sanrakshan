import React from 'react'
import shelter1 from "../../assets/shelter1.jpg"
import shelter2 from "../../assets/shelter2.jpg"
import shelter3 from "../../assets/shelter3.avif"
import shelter4 from "../../assets/shelter4.jpg"
import shelter5 from "../../assets/shelter5.jpeg"
import shelter6 from "../../assets/shelter6.jpeg"
import shelter7 from "../../assets/shelter7.jpeg"
import shelter8 from "../../assets/shelter8.jpeg"
import shelter9 from "../../assets/shelter9.png"
import shelter10 from "../../assets/shelter10.jpg"
import "./Shelter.css"

export default function Shelter() {
  return (
    <div className='shelter-sec'>
      <img src={shelter1} alt="shelter-pic"/>


      <div className='shelter-intro'>
        <h3><strong>Shelter Sunday:</strong> Lending a Hand, Spreading Love</h3>
        <div className='shelter-des'>
          <ul>
            <li><strong>Date:</strong>June 2025</li>
            <li><strong>Location:</strong>Friendicoes Shelter, Jaipur</li>
            <li><strong>Event Type:</strong>Volunteer Day</li>
          </ul>
          <div className='shelter-des-sec'>
            <p>In June 2025, the quiet corners of Friendicoes Shelter in Jaipur came alive with energy, compassion, and kindness during our special event — <i>Shelter Sunday</i>. It was a dedicated Volunteer Day where animal lovers from across the city gathered to contribute their time and effort to care for rescued animals.<br/>
            The event was more than just a visit — it was a hands-on opportunity for participants to understand the daily challenges and joys of running an animal shelter. With sleeves rolled up and hearts open, our volunteers became an essential part of the shelter’s journey for a day.</p>
            <img src={shelter2} alt="shelter-pic"/>
          </div>
        </div>

        <div className='shelter-evt'>
          <h4>What Happened During the Event:</h4>
          <div className='shelter-evt-sec'>
            <ul>
              <li>Volunteers assisted in cleaning kennels and preparing nutritious meals for the animals.</li>
              <li>Grooming sessions were organized for dogs and cats, ensuring they felt loved and cared for.</li>
              <li>A bonding zone was set up where participants spent quality time playing and interacting with the animals.</li>
              <li>Informational sessions were held to educate visitors about shelter management, adoption processes, and how they can help further.</li>
            </ul>
            <img src={shelter3} alt="shelter-pic"/>
          </div>
        </div>

        <div className='shelter-impact'>
          <h4>Impact:</h4>
          <div className='shelter-impact-sec'>
            <ul>
              <li>Over 40 new volunteers signed up for regular weekend shifts.</li>
              <li>Several animals found potential adopters after bonding with visitors.</li>
              <li>The event created a ripple effect, motivating others in the community to step up and help.</li>
              <li>Donations of food, medicines, and blankets increased significantly post-event.</li>
            </ul>
            <img src={shelter4} alt="shelter-pic"/>
          </div>
          <p>Shelter Sunday was a beautiful reminder that even one day of love and support can bring lasting comfort to animals who’ve been through so much. Each volunteer left with paw prints on their clothes — and their hearts.</p>
        </div>
      </div>

      <div className='shelter-images'>
        <h3>Glimpse Of Events</h3>
        <div className='shelter-img-sec'>
          <img src={shelter5} alt="shelter-pic"/>
          <img src={shelter6} alt="shelter-pic"/>
          <img src={shelter7} alt="shelter-pic"/>
        </div>
        <div className='shelter-img-sec'> 
          <img src={shelter8} alt="shelter-pic"/>
          <img src={shelter9} alt="shelter-pic"/>
        </div>
        <div className='shelter-img-sec'>
          <img src={shelter10} alt="shelter-pic"/>
        </div>
      </div>
    </div>
  )
}
