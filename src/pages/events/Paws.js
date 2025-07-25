import React from 'react'
import paws1 from "../../assets/paws1.jpg"
import paws2 from "../../assets/paws2.webp"
import paws3 from "../../assets/paws3.jpeg"
import paws4 from "../../assets/paws4.jpg"
import paws5 from "../../assets/paws5.jpeg"
import paws6 from "../../assets/paws6.jpg"
import paws7 from "../../assets/paws7.avif"
import paws8 from "../../assets/paws8.avif"
import paws9 from "../../assets/paws9.jpeg"
import paws10 from "../../assets/paws10.jpeg"
import "./Paws.css"

export default function Paws() {
  return (
    <div className='paws-sec'>
      <img src={paws1} alt="paws-pic"/>


      <div className='paws-intro'>
        <h3><strong>Paws on the Street:</strong> Spreading Awareness with Every Step</h3>
        <div className='paws-des'>
          <ul>
            <li><strong>Date:</strong>October 2024</li>
            <li><strong>Location:</strong>Fatehsagar Road, Udaipur</li>
            <li><strong>Event Type:</strong>Awareness Walk for Animal Welfare</li>
          </ul>
          <div className='paws-des-sec'>
            <p>In October 2024, Udaipur witnessed a heartwarming and powerful event — <i>Paws on the Street</i>, an awareness walk organized to bring attention to the issues faced by stray animals in our city. The walk took place on the scenic Fatehsagar Road and gathered passionate animal lovers, rescue volunteers, students, and concerned citizens.<br/>
            The goal was simple yet impactful — to encourage people to be more compassionate toward stray animals and to learn how small actions like offering water, driving carefully, or reporting injured animals can make a big difference.</p>
            <img src={paws2} alt="paws-pic"/>
          </div>
        </div>

        <div className='paws-evt'>
          <h4>What Happened During the Event:</h4>
          <div className='paws-evt-sec'>
            <ul>
              <li>Participants walked holding placards with messages promoting kindness towards animals.</li>
              <li>Volunteers shared quick tips on what to do when an animal is hurt or scared.</li>
              <li>Live demonstrations of basic first aid for animals were given by experienced rescuers.</li>
              <li>Informative flyers were handed out to raise awareness on responsible pet care, animal birth control, and how to reach local rescue teams in emergencies.</li>
            </ul>
            <img src={paws3} alt="paws-pic"/>
          </div>
          <p>The energy of the walk was filled with hope, empathy, and a strong message — <i>“They don’t have a voice, but we do.”</i></p>
        </div>

        <div className='paws-impact'>
          <h4>Impact:</h4>
          <div className='paws-impact-sec'>
            <ul>
              <li>Over 200 citizens joined the walk, making it a huge success.</li>
              <li>Dozens of bystanders stopped to ask questions and showed interest in helping stray animals.</li>
              <li>A noticeable increase in calls and reports to rescue helplines was seen in the following weeks.</li>
              <li>It inspired several volunteers to join ongoing rescue operations.</li>
            </ul>
            <img src={paws4} alt="paws-pic"/>
          </div>
          <p><i>Paws on the Street</i>wasn’t just a walk — it was a step towards building a more aware and compassionate society where every life, big or small, matters.</p>
        </div>
      </div>

      <div className='paws-images'>
        <h3>Glimpse Of Events</h3>
        <div className='paws-img-sec'>
          <img src={paws5} alt="paws-pic"/>
          <img src={paws6} alt="paws-pic"/>
          <img src={paws7} alt="paws-pic"/>
        </div>
        <div className='paws-img-sec'> 
          <img src={paws8} alt="paws-pic"/>
          <img src={paws9} alt="paws-pic"/>
        </div>
        <div className='paws-img-sec'>
          <img src={paws10} alt="paws-pic"/>
        </div>
      </div>
    </div>
  )
}