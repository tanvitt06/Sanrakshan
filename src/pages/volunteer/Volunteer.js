import React from 'react';
import { Link } from 'react-router-dom'; 
import "./Volunteer.css";
import volunteer1 from "../../assets/volunteer1.avif";
import volunteer2 from "../../assets/volunteer2.jpg";
import volunteer3 from "../../assets/volunteer3.webp";
import volunteer4 from "../../assets/volunteer4.jpg";
import volunteer5 from "../../assets/volunteer5.jpg";

export default function Volunteer() {
  return (
    <div className='volunteer-sec'>
      <div className='volunteer-intro'>
        <img src={volunteer1} alt="voluneer-dog-img"/>
        <div className='volunteer-txt'>
          <h3>Why Volunteering ?</h3>
          <p>Volunteering isn't just about giving — it's also about growing. Our team is made of students, professionals and animal lovers who found a purpose through Sanrakshan. Every rescued animal is a story of courage — and volunteers like you make that story possible.</p>
        </div>
      </div>


      <div className='volunteer-first'>
        <h3>Meet the Team</h3>
        <div className='fir-item'>
          <div className='volunteer-item'>
            <img src={volunteer2} alt="volunteer-pic"/>
            <h4>Divya kothari</h4>
            <h5>Senior Field Volunteer</h5>
            <p>Divya is a passionate and experienced field volunteer who has been actively involved in rescue operations and awareness drives. Her calm approach during emergencies and dedication to animal care make her a pillar of our volunteer team.</p>
          </div>

          <div className='volunteer-item'>
            <img src={volunteer4} alt="volunteer-pic"/>
            <h4>Rishabh Soni</h4>
            <h5>Digital Outreach Volunteer</h5>
            <p>Rishabh manages our digital outreach, driving awareness through social media and online campaigns. His creative content and sharp tech skills ensure our rescue alerts and messages reach wide audiences, helping Sanrakshan grow every day.</p>
          </div>

          <div className='volunteer-item'>
            <img src={volunteer3} alt="volunteer-pic"/>
            <h4>Kiran Chauhan</h4>
            <h5>Rescue Assistant</h5>
            <p>Kiran is a dedicated rescue assistant known for her quick response and steady presence during emergencies. Her hands-on experience in animal rescues and compassionate nature make her a valued member of our volunteer team.</p>
          </div>

          <div className='volunteer-item'>
            <img src={volunteer5} alt="volunteer-pic"/>
            <h4>Vijay Bhardwaj</h4>
            <h5>Shelter Support Volunteer</h5>
            <p>Vijay is known for his gentle handling of rescued the animals and regular visits to the local shelters. He ensures animals receive proper food, hygiene, and emotional comfort — making their recovery smoother and more humane.</p>
          </div>
        </div>
      </div>

      
      <div className='volunteer-second'>
        <h3>Want to Be One of Them ?</h3>
        <p>If you’ve ever felt the urge to help an animal in need, to speak up for those who can't, or to simply contribute to something meaningful — this is your chance. Whether you can offer physical help, online support, or creative ideas, there's a place for you in the Sanrakshan family. No prior experience is required — just a kind heart and the will to make a difference.<br/>
        Ready to be part of something beautiful?<br/>
        <br/>
        Fill out our Volunteer Form or click the button below to begin your journey with us.</p>
        <Link to="./Click">
          <a href="Click">Click Here</a>
        </Link> 
      </div>
    </div>
  )
}