import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Events.css";
import event1 from "../../assets/event1.jpg";
import event2 from "../../assets/event2.avif";
import event3 from "../../assets/event3.webp";
import event4 from "../../assets/event4.jpg";
import event5 from "../../assets/event5.avif";
import event6 from "../../assets/event6.jpg";
import event7 from "../../assets/event7.webp";
import event8 from "../../assets/event8.jpg";
import event9 from "../../assets/event9.webp";

export default function Events() {
  const [form, setForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const [support, setSupport] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();
    setError("");

    if(!name.trim()){
      setError("Please Enter Name");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email.trim() || !emailRegex.test(email)){
      setError("Please Enter valid Email");
      return;
    }

    if(!/^\d{10}$/.test(phone.trim())){
      setError("Please Enter valid Phone No.");
      return;
    }

    if(!address.trim()){
      setError("Please Enter Address");
      return;
    }    

    setForm(false);
    setSupport(true);
    
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
  };

  const handleClose=()=>{
    setForm(false);
  };

  useEffect(()=>{
    if(form){
      document.body.style.overflow = "hidden";
    } else{
      document.body.style.overflow = "auto"
    }
  }, [form]);

  useEffect(()=>{
    if(support){
      const timer = setTimeout(()=>{
        setSupport(false);
      }, 2000);
      return ()=> clearTimeout(timer);
    }
  },[support]);

  return (
    <div className='event-sec'>
      <div className='event-intro'>
        <img src={event1} alt="event-pic"/>
        <div className='event-txt'>
          <h3>Be a Part of the Change</h3>
          <p>Sanrakshan isn’t just about rescues — it’s a growing community. We organize on-ground campaigns, school awareness drives and animal health camps. Explore how we connect people, raise voices, and take action for animal welfare.</p>
        </div>
      </div>


      <div className='event-first'>
        <h3>Glimpse of Past Events</h3>
        <div className='event-card'>
          <div className='card-item'>
            <img src={event2} alt="rally-pic"/>
            <h4>Paws on the Street</h4>
            <h5>Awareness Walk</h5>
            <div className='card-txt'>
              <p>An open-for-all community walk to spread awareness about stray animal safety. Volunteers held banners, distributed leaflets, and shared first-aid tips to educate the public.</p> 
              <h5>Oct 2024</h5>
              <h5>FatehSagar Road, Udaipur</h5>
            </div>
            <Link to="./Paws">
              <button>Read More</button>
            </Link> 
          </div>

          <div className='card-item'>
            <img src={event3} alt="dog-pic"/>
            <h4>Collars for Compassion</h4>
            <h5>Safety Drive</h5>
            <div className='card-txt'>
              <p>To prevent road accidents, our team placed over 200 reflective collars on stray dogs in high-risk areas. This low-cost but life-saving drive was supported by 15 active volunteers.</p> 
              <h5>Dec 2024</h5>
              <h5>Rural Road Sectors, Udaipur</h5>
            </div>
            <Link to="./Collars">
              <button>Read More</button>
            </Link>
          </div>

          <div className='card-item'>
            <img src={event4} alt="kids-pic"/>
            <h4>Kindness at School</h4>
            <h5>Awareness Workshop</h5>
            <div className='card-txt'>
              <p>An interactive workshop for school children to teach empathy, basic pet care, and how to respond to an injured animal. Activities included posters, role plays, and quiz.</p> 
              <h5>March 2025</h5>
              <h5>Saraswati School, Udaipur</h5>
            </div>
            <Link to="./Kindness">
              <button>Read More</button>
            </Link>
          </div>

          <div className='card-item'>
            <img src={event5} alt="volunteer-feeding-animals-pic"/>
            <h4>Shelter Sunday</h4>
            <h5>Volunteer Day</h5>
            <div className='card-txt'>
              <p>Volunteers spent their Sunday cleaning kennels, feeding animals, and playing with rescued pets. The event helped create a stress-free environment for animals in recovery.</p> 
              <h5>June 2025</h5>
              <h5>Friendicoes Shelter, Jaipur</h5>
            </div>
            <Link to="./Shelter">
              <button>Read More</button>
            </Link>
          </div>
        </div>
      </div>


      <div className='event-second'>
        <h3>Upcoming Events</h3>
        <div className='evtSec-item'>
          <img src={event6} alt="rain-dog-pic"/>
          <div className='evtSec-txt'>
            <h4>Rain Rescue Operation</h4>
            <p>During the monsoon, countless stray animals suffer from cold, injuries, and flooding. Our Rain Rescue Operation is a proactive mission to identify and help animals in distress during the heavy rains. With the help of trained volunteers, we set up temporary shelters, dry food spots, and provide immediate medical assistance to injured strays. This event isn’t just about rescue — it’s about being a lifeline when nature turns harsh.</p>
            <div className='txt-last'>
              <h5>August 2025</h5>
              <h5>Hiran Magri, Udaipur</h5>
            </div>
          </div>
        </div>

        <div className='evtSec-item'>
          <img src={event7} alt="vaccination-pic"/>
          <div className='evtSec-txt'>
            <h4>Stray Vaccination Drive</h4>
            <p>Diseases like rabies can be fatal — not just for animals, but for humans too. Our Stray Vaccination Drive focuses on immunizing stray dogs and cats in high-risk zones. Collaborating with local veterinary clinics and student volunteers, we aim to vaccinate over 300 animals in a day. This effort not only ensures the health of animals but also builds a safer, disease-free environment for all.</p>
            <div className='txt-last'>
              <h5>Oct 2025</h5>
              <h5>Sector 11 & 14, Udaipur</h5>
            </div>
          </div>
        </div>
        
        <div className='evtSec-item'>
          <img src={event8} alt="rain-dog-pic"/>
          <div className='evtSec-txt'>
            <h4>College Awareness Talk</h4>
            <p>Awareness is the first step toward change. This talk is an open session organized in collaboration with the MLSU student union to educate young minds about animal rights, legal reporting of cruelty cases, and everyday compassionate actions. Through real-life stories, short films, and Q&A discussions, we encourage students to become allies of voiceless beings and learn how they can make a tangible impact.</p>
            <div className='txt-last'>
              <h5>Dec 2025</h5>
              <h5>MLSU Campus, Udaipur</h5>
            </div>
          </div>
        </div>
      </div>


      <div className='event-third'>
        <h3>Want to volunteer at our next event?</h3>
        <div className='evtThd-body'>
          <div className='evtThd-left'>
            <p>"Every animal we save is the result of a kind heart stepping forward. If you've ever wanted to make a real difference — to be the reason an injured puppy survives, or a hungry stray eats — this is your moment. Join us at our next event and become part of a community that believes in compassion over convenience. No special skills are needed — just your time, love, and a willingness to help. Whether it’s distributing food, assisting in rescues, or spreading awareness — every small action counts. Let’s work together to create a kinder world for those who cannot speak for themselves."</p>
            <button onClick={()=>setForm(true)}>Join Us</button>

            {form && (
              <>
                <div className='modal-sec'></div>
                <div className='form-modal'>
                  <div className='form-modal-sec'>
                    <h3>Join Our Rain Rescue Operation</h3>

                    {error && <div className='error-popUp'>*{error}*</div>}

                    <div className='modal-input'>
                      <h4>Name</h4>
                      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name' required/>

                      <h4>Email</h4>
                      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email' required/>

                      <h4>Phone No.</h4>
                      <input type="tel" value={phone} maxLength={10} onChange={(e)=>setPhone(e.target.value)} placeholder='Enter Your Number' required/>

                      <h4>Your Address</h4>
                      <input value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='Enter Your Address' required/>
                    </div>
            

                    <div className='modal-btn'>
                      <button onClick={handleSubmit}>Submit</button>
                      <button onClick={handleClose}>Close</button>
                    </div>
                  </div>
                </div>
              </>
            )}

            {support && (
              <>
                <div className='modal-sec'></div>
                <div className='support-modal'>
                  <div className='support-sec'>
                    <h4>Thank You for Your Support</h4>
                  </div>
                </div>
              </>
            )}
          </div>
          <img src={event9} alt="volunteer-cow-pic"/>
        </div>
      </div>
    </div>
  )
}