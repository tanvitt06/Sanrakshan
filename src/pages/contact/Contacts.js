import React, { useEffect, useState } from 'react';
import "./Contact.css";
import contact1 from "../../assets/contact1.jpg";
import contact2 from "../../assets/contact2.jpg";

export default function Contacts() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [response, setResponse] = useState(false);

  const handleSubmit = (e) =>{
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

    setResponse(true);
    setName("");
    setEmail("");
  }

  useEffect(()=>{
    if(response){
      document.body.style.overflow = "hidden";
    } else{
      document.body.style.overflow = "auto";
    }
  }, [response])

  useEffect(()=>{
    if(response){
      const timer = setTimeout(()=>{
        setResponse(false);
      }, 2000)
    }
  }, [response])

  return (
    <div className='contact-sec'>
      <img src={contact1} alt="buffalo-pic"/>
      <h3>Contact Us -</h3>
      <div className='contact-p'>
        <p><strong>HelpLine No:</strong>(0) 98201 22602</p>
      </div>

      <div className='contact-intro'>
        <div className='contact-txt'>
          <p>We’re always excited to hear from you! Whether you have a question about our services, want to give feedback, or simply wish to connect with us — your voice is always welcome here. We believe that every message brings us closer to understanding your needs better and improving what we do. Our team is dedicated to making sure your concerns are heard and addressed with care and sincerity. So don’t hesitate — drop us a message, share your thoughts, or just say hello. We’re here for you, and we genuinely appreciate your time and effort in reaching out.</p>

          <div className='input-txt'>
            <div className='txt-heading'>
              <h4>Name</h4>
              <input type="text" value = {name} onChange={(e)=> setName(e.target.value)} placeholder='Enter Your Name' required/>
            </div>
            <div className='txt-heading'>
              <h4>Email</h4>
              <input type="email" value = {email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter Your Email' required/>
            </div>
          </div>
          {error && <div className='contact-err'>*{error}*</div>}
          <div className='txt-heading'>
            <h4>Your Message</h4>
            <textarea placeholder='Write your message'></textarea>
          </div>
          <div className='contact-btn'>
            <button onClick={handleSubmit}>SUBMIT</button>
          </div>

          {response && (
            <>
              <div className='modal-sec'></div>
              <div className='response-modal'>
                <div className='response-sec'>
                  <h4>Your Response has been submitted!</h4>
                </div>
              </div>
              </>
          )}
        </div>

        <div className='contact-img'>
          <img src={contact2} alt="sheep=pic"/>
        </div>
      </div>
    </div>
  )
}